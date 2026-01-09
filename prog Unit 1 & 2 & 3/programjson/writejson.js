const fs = require('fs');

// Step 1: Create a JavaScript object
const student = {
  name: "monika",
  age: 22,
  course: "Node.js",
  city: "Pune",
  address: "hsp"

};

// Step 2: Convert object to JSON string
const jsonData = JSON.stringify(student, null, 2); // (null, 2) for pretty format

// Step 3: Write JSON to file
fs.writeFile('student.json', jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("✅ JSON file written successfully!");
  }
});
