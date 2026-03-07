const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { PORT, CLIENT_URL } = require("./config/constants");
const { registerRoomHandlers } = require("./sockets/registerRoomHandlers");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  registerRoomHandlers(io, socket);
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
