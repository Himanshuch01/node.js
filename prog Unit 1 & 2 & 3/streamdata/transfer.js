const fs = require('fs');
const { Transform } = require('stream');

// Create a transform stream that converts data to uppercase
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Create streams
const readable = fs.createReadStream('input.txt', 'utf8');
const writable = fs.createWriteStream('output.txt');

// Pipe the streams together
readable.pipe(upperCaseTransform).pipe(writable);

console.log('Transforming data to uppercase...');
