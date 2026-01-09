const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, welcome to my Node.js server!');
});

// Server listens on port 4000
server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
