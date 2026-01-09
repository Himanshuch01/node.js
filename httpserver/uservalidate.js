const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

// USER VALIDATION EXAMPLE
app.post(
  '/user',
  [
    body('name')
      .notEmpty()
      .withMessage('Name is required'),

    body('email')
      .isEmail()
      .withMessage('Email is invalid'),

    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters')
  ],

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User data is valid!');
  }
);

app.listen(6000, () => {
  console.log('Server running on port 6000');
});
