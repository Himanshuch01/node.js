const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('HiThere',()=>{
  console.log('Hi, how are you ?');
});
eventEmitter.emit('HiThere');