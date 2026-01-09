const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Initialize Express and HTTP Server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// SQLite Setup
const db = new sqlite3.Database('./chat.db');

// Create messages table if not exists
db.run(`CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT,
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection
io.on('connection', (socket) => {
  console.log('🟢 User connected');

  // Send chat history
  db.all('SELECT * FROM messages ORDER BY timestamp ASC LIMIT 50', [], (err, rows) => {
    if (!err) {
      socket.emit('chat history', rows);
    }
  });

  // Receive and store messages
  socket.on('chat message', ({ user, message }) => {
    db.run('INSERT INTO messages (user, message) VALUES (?, ?)', [user, message], function (err) {
      if (!err) {
        const msg = { id: this.lastID, user, message };
        io.emit('chat message', msg); // Send to all users
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('🔴 User disconnected');
  });
});

// Start server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
