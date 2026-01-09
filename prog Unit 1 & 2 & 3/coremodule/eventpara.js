const EventEmitter = require('events'); // Import the full module
const eventEmitter = new EventEmitter(); // Create an instance

eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'Monika');
