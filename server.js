const express = require('express');
var app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const { port } = require('./config/config');



const user = encodeURIComponent('palaciosrcarlosa2')
const password = encodeURIComponent('AIWrO0oyuVtsVEDy')
const cluster = 'cluster0.2ez0s8x.mongodb.net'
const nameCollection = 'messages'
const uri = `mongodb+srv://${user}:${password}@${cluster}/${nameCollection}`

db(uri)


const router = require('./network/routers');
app.use(bodyParser.json());

socket.connect(server);

router(app);


app.use('/app', express.static('public'));

server.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
