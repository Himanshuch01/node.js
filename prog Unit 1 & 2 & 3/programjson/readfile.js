const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const user = JSON.parse(data);
  console.log("User Name:", user.name);
  console.log("contact:", user.contact);
  console.log("address", user.address);

});
