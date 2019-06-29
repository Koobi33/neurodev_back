const io = require('./server').io;
const {HELLO} = require('./Events');
module.exports = function(socket) {
socket.on(HELLO, () =>{
    console.log('hello');
})
};
