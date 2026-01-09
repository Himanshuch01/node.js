const fs = require('fs');

// Create a readable stream
const readable = fs.createReadStream('input.txt', 'utf8');

// Read data in chunks
readable.on('data', (chunk) => {
  console.log('--- New Chunk ---');
  console.log(chunk);
});

// When finished
readable.on('end', () => {
  console.log('✅ Finished reading file.');
});
