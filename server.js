const express = require('express');
const router = express.Router();

var app = express();
const port = 3000

app.use(router);

router.get('/', function (req, res) {
  res.send('Hello World');
});

// app.use('/', function (req, res) {
//     res.send('Hello World');
// });

app.listen(port);
console.log(`Server started on port ${port}`);
