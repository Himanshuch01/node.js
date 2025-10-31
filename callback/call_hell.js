// when many callback are nested the becomes hard to read and maintain.
// callback hell function
const fs = require('fs');
  fs.readFile('file1.txt', 'utf8', (err, data1) =>{
    if(err){
      console.log('Error reading file1:', err);
    } else{
      fs.readFile('file2.txt', 'utf8', (err, data2)=>{
        if(err){
          console.log('error reading file2:', err)
        } else{
          fs,readFile('file3.txt', 'utf8',(err, data3)=>{
            if(err){
              console.log('error reading file3:', err);
            } else{
              console.log('All file contents:');
              console.log(data1);
              console.log(data2);
              console.log(data3);
              
            }
          });
        }
      });
    }
  });
 