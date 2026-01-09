const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.write("Welcome Client!");

  socket.on("data", (data) => {
    console.log("Client says:", data.toString());
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
