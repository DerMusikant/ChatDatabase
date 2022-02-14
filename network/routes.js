//This code hosts every 'app.use' that index would have (Just cleaner code)

const
express = require('express'),
message = require('../components/message/network'),
user = require('../components/user/network'),


routes = (server) => {
  server.use('/message', message)
  server.use('/user', user)
}

module.exports = routes
