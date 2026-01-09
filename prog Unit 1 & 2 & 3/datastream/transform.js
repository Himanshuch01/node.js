// gzipExample.js
const fs = require('fs');
const zlib = require('zlib'); // Compression library

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) // Compress data
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File compressed successfully!');
