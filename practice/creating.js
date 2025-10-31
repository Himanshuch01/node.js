const fs = require('fs');
const writeStream = fs.createWriteStream('newFile.txt');
writeStream.write("Hey, how's going all ?");
writeStream.end();

writeStream.on('finish',()=>{
  console.log('File written successfully !');
});