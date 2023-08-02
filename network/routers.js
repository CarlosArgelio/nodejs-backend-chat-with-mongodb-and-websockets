const express = require('express');
const message = require('../components/messages/network')
const user = require('../components/user/network')

const routers = function (server) {
    server.use('/messages', message);
    server.use('/users', user);
}

module.exports = routers;
