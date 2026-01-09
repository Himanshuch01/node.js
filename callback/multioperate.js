const fs = require('fs');

// Step 1: Write to a file
fs.writeFile('data.txt', 'This is initial content.', (err) => {
  if (err) return console.log(err);
  console.log('File created.');

  // Step 2: Append data
  fs.appendFile('data.txt', '\nMore data added later.', (err) => {
    if (err) return console.log(err);
    console.log('Data appended.');

    // Step 3: Read the file
    fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) return console.log(err);
      console.log('Final File Content:\n', data);
    });
  });
});
