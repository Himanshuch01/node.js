const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on('message', (name) => {
  console.log(`📩 Listener 1: You have a new message, ${name}!`);
});

// Listener 2
eventEmitter.on('message', (name) => {
  console.log(`🔔 Listener 2: Sending a notification to ${name}.`);
});

// Listener 3
eventEmitter.on('message', (name) => {
  console.log(`📬 Listener 3: Logging message delivery for ${name}.`);
});

// Emit the event
eventEmitter.emit('message', 'Himanshu');
