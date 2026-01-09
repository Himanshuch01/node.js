// eventBasic.js
const EventEmitter = require('events');
const event = new EventEmitter();

// Register listener
event.on('greet', () => {
  console.log('Hello from EventEmitter!');
});

// Emit the event
event.emit('greet');
