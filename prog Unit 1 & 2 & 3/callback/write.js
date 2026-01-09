const fs = require('fs');

fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
  if (err) {
    console.log('Error writing file:', err);
  } else {
    console.log('File written successfully!');
  }
});
