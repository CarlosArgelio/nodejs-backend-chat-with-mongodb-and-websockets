const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/', function (req, res) {
  res.send('Hello World');
});
router.get('/messages', function (req, res) {
  res.send('Lista de message');
});
router.delete('/messages', function (req, res) {
  console.log(req.query);
  console.log(req.body);

  res.send('Eliminar message');
});

// app.use('/', function (req, res) {
//     res.send('Hello World');
// });

app.listen(port);
console.log(`Server started on port ${port}`);
