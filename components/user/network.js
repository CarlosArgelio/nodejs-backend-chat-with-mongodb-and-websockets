const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
  controller.addUser(req.body.user)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.get('/', function (req, res) {
  controller.getUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
});

module.exports = router;
