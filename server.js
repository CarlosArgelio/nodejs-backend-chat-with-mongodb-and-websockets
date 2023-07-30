const express = require('express');
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const router = express.Router();

const response = require('./network/response');

var app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/', function (req, res) {
  res.send('Hello World');
});
router.get('/messages', function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "custom-value"
  });
  // res.send('Lista de message');
  response.success(req, res, 'Lista de message');
});
router.post('/messages', function (req, res) {
  try {
    // res.status(201).send('created');
    response.success(req, res, 'created', 201);
  } catch (error) {
    res.status(boom.badRequest().send(error))
  }
});

app.use('/app', express.static('public'));

app.listen(port);
console.log(`Server started on port ${port}`);
