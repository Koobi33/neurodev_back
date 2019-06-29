const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const PORT = process.env.PORT || 3030;

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    console.log(req);
    console.log(req.body, 'REQ BODY');
});

app.post('/', (req, res) => {
   console.log(req);
   console.log(req.body, 'REQ BODY')
});


app.listen(PORT, () => {
    console.log('server has been started on ' + PORT);
});
