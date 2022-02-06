//This code hosts every 'app.use' that index would have (Just cleaner code)

const
express = require('express'),
message = require('../components/message/network'),


routes = (server) => {
  server.use('/message', message)
}

module.exports = routes
