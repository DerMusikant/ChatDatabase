//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


//Returns an array of chats (Can be filtered by name on query)
router.get('/', (req, res) => {
  const filterName = req.query.name || null
    controller.getChats( filterName )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, 'Internal Error', e)
      })
    })


//Posts a chat on the database (users array and name required on request body)
router.post('/', (req, res) => {
    controller.addChat(req.body.users, req.body.name)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Message controller error', 400)
    })
})



//Deletes a msg (Id required as a parameter)
router.delete('/:id', (req, res) => {
  controller.deleteChat(req.params.id)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, 'Internal error', e)
  })
})


module.exports = router
