const expreess = require('express');
const app = expreess();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index1.html');
}); 
io.on('connection', (socket) => {
    console.log('user connected');
    socket.on("message", (msg) => {     
        io.emit("message", msg);
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
       