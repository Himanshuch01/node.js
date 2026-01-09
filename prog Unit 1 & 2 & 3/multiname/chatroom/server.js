const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // allow all clients
  },
});

app.get("/", (req, res) => {
  res.send("Socket.IO Chat Server with Rooms is Running");
});

// SOCKET.IO LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join Room
  socket.on("joinRoom", (roomName) => {
    socket.join(roomName);
    console.log(`${socket.id} joined room: ${roomName}`);

    // Notify others
    socket.to(roomName).emit("message", `🔔 User ${socket.id} joined the room`);
  });

  // Receive Message
  socket.on("chatMessage", ({ room, message }) => {
    console.log(`Message in ${room}: ${message}`);

    // Send only inside the room
    io.to(room).emit("message", message);
  });

  // Leave Room
  socket.on("leaveRoom", (roomName) => {
    socket.leave(roomName);
    socket.to(roomName).emit("message", `❌ User ${socket.id} left the room`);
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// START SERVER
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
