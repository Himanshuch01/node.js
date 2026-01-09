const fs = require('fs');

const data1 = JSON.parse(fs.readFileSync('data1.json', 'utf8'));
const data2 = JSON.parse(fs.readFileSync('data2.json', 'utf8'));

// Merge both arrays
const mergedData = [...data1, ...data2];

// Write to new file
fs.writeFile('merged.json', JSON.stringify(mergedData, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("✅ Files merged successfully!");
  }
});
