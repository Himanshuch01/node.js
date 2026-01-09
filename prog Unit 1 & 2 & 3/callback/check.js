const fs = require('fs');

if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File not found!');
}
