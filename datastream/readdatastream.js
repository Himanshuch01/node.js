// readStreamExample.js
const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('input.txt', 'utf8');

// Listen for 'data' event
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// When reading is complete
readStream.on('end', () => {
  console.log('Finished reading file.');
});
