const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name)=>{
    console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Class');

/* On moving the emitter.emit('greet', 'Class'); line ABOVE the emitter.on(...) block and running
nothing will print on the console. 
This happens because EventEmitter executes synchronously, if an event is emitted before the listner is registered to listen for it, the event drops silently.
*/
