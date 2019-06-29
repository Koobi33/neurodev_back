const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const PORT = process.env.PORT || 3030;

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log('hello');
});



app.listen(PORT, () => {
    console.log('server has been started on ' + PORT);
});
