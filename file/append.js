const fs = require('fs');

fs.appendFile('Output.txt', '\nThis line was appended later.', (err)=> {
if(err)
  console.log(('Error appending the file:', err));
 else{
  console.log('data appended successfully');
 }
});