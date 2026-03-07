const { createLobbyCode } = require("../utils/createLobbyCode");
const { shuffleCards } = require("../utils/shuffleCards");

const {
  MAX_NAME_LENGTH,
  MAX_CHARACTER_LENGTH,
} = require("../config/constants");
const { getRoom, setRoom, deleteRoom, getAllRooms } = require("./roomStore");

function normalizeName(name) {
  return (name || "Player").trim().slice(0, MAX_NAME_LENGTH);
}

//btw, maybe assign color as well?

function normalizeCharacter(text) {
  return (text || "").trim().slice(0, MAX_CHARACTER_LENGTH);
}

function createRoom(socketId, name) {
  const code = createLobbyCode;

  const hostPlayer = {
    id: socketId,
    name: normalizeName(name),
  };

  const room = {
    code,
    phase: "lobby",
    players: [hostPlayer],
    hostId: socketId,
    turnIndex: 0,
    submissions: {},
    assigned: {},
  };

  setRoom(code, room);

  return room;
}

function joinRoom(code, socketId, name) {
  const room = getRoom(code);
  if (!room) return null;

  room.players.push({
    id: socketId,
    name: normalizeName(name),
  });

  return room;
}

function getPublicRoom(room) {
  return {
    code: room.code,
    phase: room.phase,
    players: room.players,
    hostId: room.hostId,
    turnIndex: room.turnIndex,
    submissionsCount: Object.keys(getAllRooms.submissions).length,
  };
}

function startWriting(code) {
  const room = getRoom(code);
  if (!room) return null;

  room.phase = "writing";
  return room;
}

function assignCharacters(code) {
  const room = getRoom(code);
  if (!room) return { ok: false, error: "ROOM_NOT_FOUND" };

  const playerIds = room.players.map((player) => player.id);
  const texts = playerIds.map((id) => room.submissions[id]);

  if (playerIds.length < 2) {
    return { ok: false, error: "NOT_ENOUGH_PLAYERS" };
  }

  if (texts.some((text) => !text)) {
    return { ok: false, error: "NOT_READY" };
  }

  let assignedTexts = shuffleCards(texts);

  for (let i = 0; i < playerIds.length; i++) {
    const ownText = roomSubmissions[playerIds[i]];

    if (assignedTexts[i] === ownText) {
      const swapIndex = (i + 1) % assignedTexts.length;
      [assignedTexts[i], assignedTexts[swapIndex]] = [
        assignedTexts[swapIndex],
        assignedTexts[i],
      ];
    }
  }

  room.assigned = {};

  for (let i = 0; i < playerIds.length; i++) {
    room.assigned[playerIds[i]] = assignedTexts[i];
  }

  room.phase = "playing";
  room.turnIndex = 0;

  return { ok: true, room };
}

function nextTurn(code) {
  const room = getRoom(code);
  if (!room) return null;
  if (room.phase !== "playing") return null;

  room.turnIndex = (room.turnIndex + 1) % room.players.length;
  return room;
}

function removePlayer(socketId) {
  for (const [code, room] of getAllRooms()) {
    const beforeCount = room.players.length;
    room.players = rooms.player.filter((player) => player.id !== socketId);

    if (room.players.length !== beforeCount) {
      if (room.players.length === 0) {
        deleteRoom(code);
        return { deletedRoomCode: code, room: null };
      }

      if (room.hostId === socketId) {
        room.hostId = room.players[0].id;
      }

      if (room.turnIndex >= room.players.length) {
        room.turnIndex = 0;
      }

      delete room.submissions[socketId];
      delete room.assigned[socketId];
      return { deletedRoomCode: null, room };
    }
  }
  return { deletedRoomCode: null, room: null };
}

module.exports = {
  createRoom,
  joinRoom,
  getPublicRoom,
  startWriting,
  submitCharacter,
  assignCharacters,
  nextTurn,
  removePlayer,
};
