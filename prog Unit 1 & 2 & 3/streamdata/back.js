const fs = require('fs');

const readable = fs.createReadStream('bigfile.txt');
const writable = fs.createWriteStream('output.txt');

// When data is available from readable
readable.on('data', (chunk) => {
  const canWrite = writable.write(chunk);
  
  // If buffer is full, pause reading
  if (!canWrite) {
    console.log('⏸️ Pausing readable stream...');
    readable.pause();
  }
});

// When writable stream is ready for more data
writable.on('drain', () => {
  console.log('▶️ Resuming readable stream...');
  readable.resume();
});

// Handle completion
readable.on('end', () => {
  writable.end();
  console.log('✅ Streaming completed!');
});

// Handle errors
readable.on('error', (err) => console.error('Read error:', err));
writable.on('error', (err) => console.error('Write error:', err));
