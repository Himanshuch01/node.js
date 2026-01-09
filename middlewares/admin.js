const express = require('express');
const app = express();
const port = 7000;

// admin middleware
function checkAdmin(req, res, next) {
  const role = req.query.role;
  if (role === 'admin') {
    next();
  } else {
    res.status(403).send('Access denied. Admins only.');
  }
} 