const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('data.txt'))

  console.log('File successfully decompressed !'); 