//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


router.get('/', (req, res) => {
  if (req.query.error == 'ok'){
    response.error(req, res, 'Fake Error', 'Just an error simulation at message/network')
  }else{
    response.success(req, res, 'Hello from /message')
  };
})

router.post('/', (req, res) => {
  if (req.query.error == 'ok'){
    response.error(req, res,'Fake error', 'Just an error simulation at message/network')
  }else{
    controller.addMessage(req.body.user, req.body.message)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Message controller error', 400)
    })
  }
})

module.exports = router
