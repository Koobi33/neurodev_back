const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;

const app = express();
app.use(bodyParser);
app.use(logger('dev'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    fs.writeFile("temp.txt", req.body, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
   console.log(req.body, 'REQ BODY')
});


app.listen(PORT, () => {
    console.log('server has been started on ' + PORT);
});
