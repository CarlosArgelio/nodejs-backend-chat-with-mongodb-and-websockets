const express = require('express');
var app = express();
const server = require('http').Server(app);

const cors = require('cors');

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const { config } = require('./config/config');

db(config.dbUrl)


const router = require('./network/routers');

app.use(cors());
app.use(bodyParser.json());

socket.connect(server);

router(app);


app.use('/' + config.publicRoute, express.static('public'));

server.listen(config.port, function() {
  console.log(`Server started on port ${config.port}`);
});
