// Import the events module
const EventEmitter = require('events');

// Create an EventEmitter object
const eventEmitter = new EventEmitter();

// Register an event listener
eventEmitter.on('greet', () => {
  console.log('Hello! This is a greeting event.');
});

// Trigger the event
eventEmitter.emit('greet');
