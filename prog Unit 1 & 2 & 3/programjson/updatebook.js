const fs = require('fs');

// Step 1: Read JSON file
fs.readFile('books.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  let books = JSON.parse(data);

  // Step 2: Update price of one book
  books.forEach(book => {
    if (book.title === "Node.js Guide") {
      book.price = 700; // updated price
    }
  });

  // Step 3: Write updated data
  fs.writeFile('books.json', JSON.stringify(books, null, 2), (err) => {
    if (err) throw err;
    console.log("✅ Book price updated!");
  });
});
