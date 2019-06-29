const logger = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = require('express')();
const mysql = require('mysql');

const dbknex = {
    client: 'mysql',
    connection: {
        host: '35.204.124.30',
        user: 'root',
        password: 'admin',
        database: 'instances'
    }
};

const knex = require('knex')(dbknex);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
const http = require('http').createServer(app);
const io = module.exports.io =  require('socket.io')(http);

const PORT = process.env.PORT || 3030;

const SocketManager = require('./socketManager');

app.get('/', (req, res) => {
    async () =>  {
        let data = await knex.from('instances').select("*")
        console.log(data);
    }
    res.sendFile(
        __dirname + '/index.html'
    )});

app.post('/input', (req, res) => {
   //save data to db
});

app.post('/finish', (req, res) => {
    //get BIG data from db and send to zerorpcserver
    //waiting rpc answer and send res to client!

});

io.on('connection', SocketManager);

http.listen(PORT, () => {
    console.log('server started on ' + PORT);
});

