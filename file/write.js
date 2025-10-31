const fs = require('fs');
fs.writeFile('output.txt', 'Hello Node.js!', (err)=>{
  if(err){
    console.log('error writing the file:', err);
  } else{
    console.log('File written sucessfully!');
  }
});