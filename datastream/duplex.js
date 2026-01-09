// duplexExample.js
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');

  // Data from client
  socket.on('data', (chunk) => {
    console.log('Received:', chunk.toString());
    socket.write('Server received: ' + chunk); // Send back data
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
