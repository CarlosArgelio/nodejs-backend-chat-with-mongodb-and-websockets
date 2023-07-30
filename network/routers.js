const express = require('express');
const message = require('../components/messages/network')

const routers = function (server) {
    server.use('/messages', message)
}

module.exports = routers;
