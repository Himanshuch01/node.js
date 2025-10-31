const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('message', (name) => {
  console.log(`You have a new message ${name}!`);
});


eventEmitter.emit('message', 'Himanshu');
