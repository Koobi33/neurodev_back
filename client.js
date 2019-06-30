const app = require('express')();
const PORT = process.env.PORT || 3035;
const client = require('socket.io-client');
const socket = client('http://127.0.0.1:25565');
const axios = require('axios');

app.get('/:id', (req, res) => {
socket.emit('FINISH', req.params.id);
});
app.listen(PORT, () => {console.log('server client on :' + PORT)});


