const fs = require('fs');

// Create read and write streams
const readable = fs.createReadStream('input.txt', 'utf8');
const writable = fs.createWriteStream('output.txt');

// Pipe with error handling
readable.pipe(writable);

// Handle stream errors
readable.on('error', (err) => {
  console.error('Error reading file:', err.message);
});

writable.on('error', (err) => {
  console.error('Error writing file:', err.message);
});

writable.on('finish', () => {
  console.log('File written successfully!');
});
