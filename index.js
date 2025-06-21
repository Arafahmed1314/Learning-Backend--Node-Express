// const EventEmitter = require('events');
// const emitter = new EventEmitter();
const { startP } = require('./index2.js');
const { emitter } = require('./index2.js');
emitter.on('event1', (message) => {
    console.log(`Event 1 received: ${message}`);
});
startP("oh");
