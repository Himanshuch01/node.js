const fs = require('fs');

// Create a readable stream (source)
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream (destination)
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

console.log('Data is being streamed from input.txt to output.txt...');
