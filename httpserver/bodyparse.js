const express = require('express');
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('User data received');
});

app.listen(3000, () => console.log('Server running on port 3000'));
