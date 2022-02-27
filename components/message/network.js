//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


//Returns an array of messages (Can be filtered by cID on query)
router.get('/', (req, res) => {
  const filterMessages = req.query.cID || null
    controller.getMessages( filterMessages )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, 'Internal Error', e)
      })
    })


//Posts a message on the database (user, message and chat are needed on request body)
router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message, req.body.chat)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Message controller error', 400)
    })
})


//Modifies a msg's text (id is required as a parameter on url)
router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', e)
        })
})

//Deletes a msg (Id required as a parameter)
router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, 'Internal error', e)
  })
})


module.exports = router
