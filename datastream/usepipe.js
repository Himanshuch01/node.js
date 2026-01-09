// pipeExample.js
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('copy.txt');

// Connect read stream to write stream
readStream.pipe(writeStream);

console.log('File copied successfully using pipe!');
