const fs = require('fs');

fs.unlink('newfile.txt', (err) => {
  if (err) {
    console.log('Error deleting file:', err);
  } else {
    console.log('File deleted successfully!');
  }
});
