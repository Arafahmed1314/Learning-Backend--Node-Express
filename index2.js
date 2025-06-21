const EventEmitter = require('events');
const emitter = new EventEmitter();
function startP(params) {
    console.log('Starting process with params:', params);
    emitter.emit('event1', 'Hello, World!');
}
module.exports = {
    startP: startP,
    emitter: emitter
};