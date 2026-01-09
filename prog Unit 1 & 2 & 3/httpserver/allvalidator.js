const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const userRouter = express.Router();

// Middleware to parse JSON
app.use(express.json());

// User routes
userRouter.get('/', (req, res) => {
  res.send('User profile');
});

userRouter.post(
  '/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Proceed with registration logic
    res.send('User registered!');
  }
);

// Use the userRouter for routes starting with '/user'
app.use('/user', userRouter);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
