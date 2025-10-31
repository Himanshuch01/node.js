const fs = require('fs');

if(fs.existsSync('example.txt')){
  console.log('file exists!');
}else{
  console.log('File not found');
}
