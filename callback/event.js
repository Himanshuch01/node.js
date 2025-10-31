// const EventEmitter = require('events'); @@ importing 
// const eventEmitter = new EventEmitter();  @@ creating the event 

// eventEmitter.on('hello',()=>{
//   console.log('Hello Event Triggered !');
// });
// eventEmitter.emit('hello');

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
//  eventEmitter.on('greet', (name) =>{
//   console.log('Hello, ${name}!');

//  });
//  eventEmitter.emit('greet', 'Monika');

//---------------------------to emit the event------------------------------

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// const showMessage = () => console.log('Event triggered!');

// eventEmitter.on('remove', showMessage);
// eventEmitter.emit('remove');

// eventEmitter.removeListener('remove', showMessage);
// eventEmitter.emit('remove');


// -------------------------runs only once ----------------------

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.once('Start', ()=>{
//   console.log("this event has ran only once");
// });

// eventEmitter.emit('start');
// eventEmitter.emit('start');



// ----------------------removing the listener---------------------------

// simple file creator -- fs.writeFileSync(), fs.readFileSynsc(), fs.sppnedFileSync(), fs.unlinkSync() 

// --------------------- multiple event-----------


const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('data', ()=> console.log('Data recieved'));
eventEmitter.on('data', ()=> console.log('Data processed'));
eventEmitter.on('data', ()=> console.log('Data saved'));
eventEmitter.emit('data');