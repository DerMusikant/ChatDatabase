//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


//Returns an array of chats (Can be filtered by uID on query)
router.get('/', (req, res) => {
  const filterUser = req.query.uID || null
    controller.getChats( filterUser )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, e, 'Chat getter error')
      })
    })


//Posts a chat on the database (users array and name required on request body)
router.post('/', (req, res) => {
    controller.addChat(req.body.users, req.body.name)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Chat post error', 400)
    })
})



//Deletes a chat (Id required as a parameter)
router.delete('/:id', (req, res) => {
  controller.deleteChat(req.params.id)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, e, 'Chat deleting error')
  })
})


module.exports = router
