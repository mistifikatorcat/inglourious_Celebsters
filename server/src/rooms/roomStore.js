const rooms = new Map();

function getRoom(code) {
  return rooms.get(code);
}

function setRoom(code, room) {
  rooms.set(code, room);
}

function deleteRoom(code) {
  rooms.delete(code);
}

function getAllRooms() {
  return rooms.entries();
}

module.exports = {
  getRoom,
  setRoom,
  deleteRoom,
  getAllRooms,
};
