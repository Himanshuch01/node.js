const fs= require('fs');

fs.rename('output.txt', 'newfile.txt', (err)=>{
  if(err){
    console.log("Error handijg file;",err);
  }else{
    console.log("file remaned successfully!");
  }
});