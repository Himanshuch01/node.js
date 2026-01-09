const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('hello', () => {
  console.log('Hello Event Triggered!');
});

eventEmitter.emit('hello');
