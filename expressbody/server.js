const express = require('express');
const app = express();

// Body parser built-in
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/student', (req, res) => {
  console.log(req.body);   // Display incoming data
  res.send("Student data received!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
