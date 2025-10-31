// -----------Asynchronous callback----------------
const fs = require('fs');
fs.readFile('test.text', 'utf8', function(err,data){
  if(err){
    console.log('Error reading file:', err)
  } else {
    console.log('file content:', data);
  }
});
console.log('Reading file...');