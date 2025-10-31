const fs =  require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello jii');
writeStream.write('Kaise hai');
writeStream.write('Ji');
writeStream.end();

writeStream.on('finish',()=>{
  console.log('File writing completed !');
});







































// const fs = require('fs');

// // Create a write stream instead of read stream
// const writeStream = fs.createWriteStream('output.txt', 'utf-8');

// // Write data to the file
// writeStream.write('Hello jii\n');
// writeStream.write('Kaise hai\n');
// writeStream.write('Ji\n');

// // Signal that you're done writing
// writeStream.end();

// // Listen for the 'finish' event
// writeStream.on('finish', () => {
//   console.log('File writing completed!');
// });

// // ✅ Handle possible errors
// writeStream.on('error', (err) => {
//   console.error('Error writing file:', err.message);
// });
