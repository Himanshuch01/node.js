const fs =  require('fs');

const readStream = fs.createReadStream('input.txt','utf-8');

readStream.on('data', (chunk)=>{
  console.log('Recieved chunk:', chunk);
});

readStream.on('end',()=>{
  console.error('Finished reading file.');
});

// const fs = require('fs');

// const readStream = fs.createReadStream('input.txt', 'utf-8');

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('end', () => {
//   console.log('Finished reading file.');
// });

// // ✅ Handle errors
// readStream.on('error', (err) => {
//   console.error('Error reading file:', err.message);
// });
