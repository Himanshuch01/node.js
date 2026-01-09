const fs = require('fs');

// Step 1: Read students.json
fs.readFile('students.json', 'utf8', (err, data) => {
  if (err) {
    console.error("❌ Error reading file:", err);
    return;
  }

  try {
    // Step 2: Parse JSON data
    const students = JSON.parse(data);

    // Step 3: Increase marks by 5 for each student
    students.foreach(student => {
      student.marks += 5;
    });

    // Step 4: Save updated data back to file
    fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
      if (err) {
        console.error("❌ Error writing file:", err);
      } else {
        console.log("✅ Marks updated successfully!");
      }
    });
  } catch (parseError) {
    console.error("❌ JSON format error:", parseError);
  }
});
