// writeStreamExample.js
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

// Write multiple chunks
writeStream.write('Hello ');
writeStream.write('Stream ');
writeStream.write('World!');

// End the stream
writeStream.end();

writeStream.on('finish', () => {
  console.log('File writing completed!');
});
