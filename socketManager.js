const io = require('./server').io;
const {HELLO} = require('./Events');
const zerorpc = require('zerorpc');

module.exports = function(socket) {
    var client = new zerorpc.Client();
console.log(client);
    client.connect('tcp://127.0.0.1:4242');
    console.log('socket id: ' + socket.id);
client.invoke('streaming_range', 1,2,3);

	socket.on(HELLO, () =>{
    console.log('hello');

})
};
