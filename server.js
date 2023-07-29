const express = require('express');

var app = express();
const port = 3000

app.use('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port);
console.log(`Server started on port ${port}`);