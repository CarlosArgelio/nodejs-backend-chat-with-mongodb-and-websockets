const express = require('express');
const bodyParser = require('body-parser');

// const router = require('./components/messages/network');
const router = require('./network/routers');

var app = express();
const port = 3000

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);


app.use('/app', express.static('public'));

app.listen(port);
console.log(`Server started on port ${port}`);
