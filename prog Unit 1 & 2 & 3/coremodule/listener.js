const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const showMessage = () => console.log('Event triggered!');

eventEmitter.on('remove', showMessage);
eventEmitter.emit('remove');  // Works

eventEmitter.removeListener('remove', showMessage);
eventEmitter.emit('remove');  // No output
