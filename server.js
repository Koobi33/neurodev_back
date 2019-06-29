const logger = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = require('express')();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/data', {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('connected to mongo');
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

connectDB();
const datamodel = mongoose.model('neuro', new mongoose.Schema({
    id: Number,
    datetime: String,
    name: String,
    data: Array
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
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

