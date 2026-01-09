const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('data', () => console.log('Data received.'));
eventEmitter.on('data', () => console.log('Data processed.'));
eventEmitter.on('data', () => console.log('Data saved.'));

eventEmitter.emit('data');
