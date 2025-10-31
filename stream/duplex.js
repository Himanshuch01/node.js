// when we want to connect our client to the server 

const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer((Socket)=>
{
  console.log('Client connected');

// data from the client
Socket.on('data', (chunk)=>{
  console.log('Recieved :', chunk.toString()); 
  server.write('server recived: ' + chunk ); // send back data
  });

});

server.listen(3000, ()=>{
  console.log('Server listening on port 3000');
});





// by readstream read a file and first write the file using readCreateStream 
