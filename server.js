const express = require('express');
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const router = express.Router();

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
  res.send('Lista de message');
});
router.post('/messages', function (req, res) {
  try {
    res.status(201).send('created');
  } catch (error) {
    res.status(boom.badRequest().send(error))
  }
  res.send('Eliminar message');
});

// app.use('/', function (req, res) {
//     res.send('Hello World');
// });

app.listen(port);
console.log(`Server started on port ${port}`);
