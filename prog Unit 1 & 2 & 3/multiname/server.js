const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from current folder
app.use(express.static(__dirname));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Socket.io logic
io.on("connection", (socket) => {
  console.log("New user connected");

  // When message received from any user
  socket.on("chatMessage", (data) => {
    // Broadcast message to all connected users
    io.emit("chatMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start server
server.listen(8001, () => {
  console.log("Server started on port 8001");
});

