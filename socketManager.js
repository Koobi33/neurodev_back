const io = require('./server').io;
const {HELLO} = require('./Events');
const zerorpc = require('zerorpc');

module.exports = function(socket) {
    var client = new zerorpc.Client();
    client.connect('tcp://127.0.0.1:4242');
    console.log('socket id: ' + socket.id);
socket.on(HELLO, () =>{
    console.log('hello');
})
};
