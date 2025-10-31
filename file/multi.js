const fs = require('fs');
// creating
fs.writeFile('data.txt', 'This is intial content.',(err)=>{
  if (err) return console.log(err);
  console.log('File created.');
// appending
fs.appendFile('data.txt','\nMore data added later.', (err)=>{
  if (err) return console.log('err');
  console.log('data appneded .');
  // reading
  fs.readFile('data.txt', 'utf8', (err)=>{
    console.log('data read successfully');
  });
});
});