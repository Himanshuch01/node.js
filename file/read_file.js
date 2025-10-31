const fs = require('fs');
fs.readFile('test.txt', 'utf8', function(err,data){
  if(err){
    console.log('Error:', err);
  }else{
    console.log('file content:', data);
  }
});