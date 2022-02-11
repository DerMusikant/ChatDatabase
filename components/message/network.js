//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


//Recieves an array of messages (Can be filtered by user on query)
router.get('/', (req, res) => {
  const filterMessages = req.query.user || null

    controller.getMessages( filterMessages )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, 'Internal Error', e)
      })
    })


//Posts a message on the database (body.user and body.message are needed on request)
router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Message controller error', 400)
    })
})

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', e)
        })
})

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
