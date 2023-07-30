const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "custom-value"
  });
  // res.send('Lista de message');
  response.success(req, res, 'Lista de message');
});
router.post('/', function (req, res) {
  console.log(req.body)

  controller.addMessage(req.body.user, req.body.message)
    .then((fullmessage) => {
      response.success(req, res, fullmessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Informacion invalida', 400, e);
    })
});

module.exports = router;
