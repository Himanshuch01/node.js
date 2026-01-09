const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const stream = fs.createReadStream('bigfile.txt');
  stream.pipe(res);
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
