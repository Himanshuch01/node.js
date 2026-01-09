const fs = require('fs');

fs.appendFile('output.txt', '\nThis line was appended later.', (err) => {
  if (err) {
    console.log('Error appending file:', err);
  } else {
    console.log('Data appended successfully!');
  }
});
