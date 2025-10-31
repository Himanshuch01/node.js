// const fs = require('fs');
// const zlib = require('zlib');

// fetch.createReadStream('input.txt');
//   .pipe(zlib.createGzip());
//   .pipe(fs.createWriteStream('input.txt.gz'));

//   console.log('File compressed successfully !');


const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('input.txt');
const gzipStream = zlib.createGzip();
const writeStream = fs.createWriteStream('input.txt.gz');

readStream
  .pipe(gzipStream)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('File compressed successfully!');
  });

