const fs = require('fs');

// Step 1: Read existing JSON file
fs.readFile('student.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Step 2: Convert JSON string to JS object
  let student = JSON.parse(data);

  // Step 3: Update data
  student.city = "chd"; // change existing value
  student.grade = "b+";    // add new field
  student.address = "delhi"; 
  student.age = 45;
  student.name = "mona";

  // Step 4: Write updated data back to file
  fs.writeFile('student.json', JSON.stringify(student, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("✅ JSON file updated successfully!");
    }
  });
});
