//Requiring dependencies

const express = require('express')

const response = require('./network/response')

//Express variables

const router = express.Router()

var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)

//Actual code

router.get('/message', (req, res) => {
  if (req.query.error == 'ok'){
    response.error('Fake error', req, res)
  }else{
    response.success(req, res, 'Hello from /message')
  }
})

router.post('/message', (req, res) => {
  response.success(req,res, 'Created succesfully')
})


app.listen(3000)

console.log('app ready at: http://localhost:3000')
