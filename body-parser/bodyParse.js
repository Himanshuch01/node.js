const express = require('express');
const app = express();
//parse incoming JSON requests
app.use(express.json());
//
//parse incoming URL encoded requests
app.use(express.urlencoded({ extended: true }));
app.post('/user', (req, res) => {
  // Access the parsed JSON data from req.body
  console.log(req.body);

  res.send('User data received successfully!');
});
app.listen(3000, () =>
  console.log('Server is running on port 3000'));

// To test this code, you can use a tool like Postman or cURL to send a POST request to http://localhost:3000/user with a JSON body.



