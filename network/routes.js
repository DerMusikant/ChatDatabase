//This code hosts every 'app.use' that index would have (Just cleaner code)

const
express = require('express'),
message = require('../components/message/network'),
user = require('../components/user/network'),
chat = require('../components/chat/network')


routes = (server) => {
  server.use('/message', message)
  server.use('/user', user),
  server.use('/chat', chat)
}

module.exports = routes
