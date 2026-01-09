const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.once('start', () => {
  console.log('This event runs only once!');
});

eventEmitter.emit('start');
eventEmitter.emit('start');
