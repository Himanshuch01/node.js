const fs = require('fs');

fs.rename('output.txt', 'newfile.txt', (err) => {
  if (err) {
    console.log('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});
