const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('Copy.txt');

readStream.pipe(writeStream);
console.log('file copied successfully using pipe !');


