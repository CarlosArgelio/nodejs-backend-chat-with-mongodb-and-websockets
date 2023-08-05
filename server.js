const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routers');

const user = encodeURIComponent('palaciosrcarlosa2')
const password = encodeURIComponent('AIWrO0oyuVtsVEDy')
const cluster = 'cluster0.2ez0s8x.mongodb.net'
const nameCollection = 'messages'
const uri = `mongodb+srv://${user}:${password}@${cluster}/${nameCollection}`

db(uri)

var app = express();
const port = 3001

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);


app.use('/app', express.static('public'));

app.listen(port);
console.log(`Server started on port ${port}`);
