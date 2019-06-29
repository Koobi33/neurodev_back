const logger = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser);
app.use(logger('dev'));
const http = require('http').createServer(app);
const io = module.exports.io =  require('socket.io')(http);

const PORT = process.env.PORT || 3030;

const SocketManager = require('./socketManager');

app.get('/', (req, res) => {
    res.sendFile(
        __dirname + '/index.html'
    )});

app.post('/input', (req, res) => {
    console.log(req.body);
});
app.post('/test', (req, res) => {
    let someJSON = {};
    someJSON.id = req.body.id;
    someJSON.name = 'PIDAR';
    console.log(JSON.parse(someJSON));
    res.send(JSON.parse(someJSON));
});

app.post('/', (req, res) => {
    fs.writeFile("temp.txt", req.body, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
    console.log(req.body, 'REQ BODY')
});


io.on('connection', SocketManager);

http.listen(PORT, () => {
    console.log('server started on ' + PORT);
});

