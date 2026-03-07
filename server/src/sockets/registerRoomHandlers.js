const {
  createRoom,
  joinRoom,
  getPublicRoom,
  startWriting,
  submitCharacter,
  assignCharacters,
  nextTurn,
  removePlayer,
} = require("../rooms/roomService");

function registerRoomHandlers(io, socket) {
  socket.io("create_room", ({ name }, callback) => {
    const room = createRoom(socket.id, name);

    socket.join(room.code);

    callback?.({
      ok: true,
      code: room.code,
      playerId: socket.id,
      room: getPublicRoom(room),
    });

    io.to(room.code).emit("room_update", getPublicRoom(room));
  });

  socket.on("join_room", ({ code, name }, callback) => {
    const room = joinRoom(code, socket.id, name);

    if (!room) {
      callback?.({ ok: false, error: "ROOM_NOT_FOUND" });
      return;
    }

    socket.join(room.code);

    callback?.({
      ok: true,
      code: room.code,
      playerID: socket.id,
      room: getPublicRoom(room),
    });

    io.to(room.code).emit("room_update", getPublicRoom(room));
  });

  socket.on("start_writing", ({ code }) => {
    const room = startWriting(code);
    if (!room) return;

    io.to(room.code).emit("room_update", getPublicRoom(room));
  });

  socket.on("submit_character", ({ code, playerID, text }) => {
    const room = submitCharacter(code, playerID, text);
    if (!room) return;

    io.to(room.code).emit("room_update", getPublicRoom(room));
  });

  socket.on("start_game", ({ code }, callback) => {
    const result = assignCharacters(code);

    if (!result.ok) {
      callback?.(result);
      return;
    }

    const room = result.room;
    io.to(room.code).emit("room_update", getPublicRoom(room));

    for (const player of room.players) {
      io.to(player.id).emit("private_assignment", {
        character: room.assigned[player.id],
      });
    }

    callback?.({ ok: true });
  });

  socket.on("next_turn", ({ code }) => {
    const room = nextTurn(code);
    if (!room) return;

    io.to(room.code).emit("room_update", getPublicRoom(room));
  });

  socket.on("disconnect", () => {
    const result = removePlayer(socket.id);

    if (result.room) {
      io.to(result.room.code).emit("room_update", getPublicRoom(result.room));
    }
  });
}

module.exports = { registerRoomHandlers };
