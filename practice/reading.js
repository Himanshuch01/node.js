const fs = require('fs');
const readStream = fs.createReadStream('newFile.txt', 'utf-8');

readStream.on('data', (chunk)=>{
  console.log('Recieved chunk:', chunk);
});

readStream.on('end',()=>{
  console.error('The txt file read successfully ');
});


