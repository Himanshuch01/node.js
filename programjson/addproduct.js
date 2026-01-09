const fs = require('fs');

const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
  {id: 4, name: "mouse",  price: 4000}
];

// Convert to JSON string
const jsonData = JSON.stringify(products, null, 2);

// Write JSON data to file
fs.writeFile('products.json', jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("✅ products.json created successfully!");
  }
});
