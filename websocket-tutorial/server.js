// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'public' directory
app.use(express.static('public'));

// Handle client connections
io.on('connection', (socket) => {
    console.log('👤 A user connected:', socket.id);
    
    // Listen for messages from client
    socket.on('message', (data) => {
        console.log('📩 Message received:', data);
        
        // Send message back to client
        socket.emit('response', `Server received: ${data}`);
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('👋 User disconnected:', socket.id);
    });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});