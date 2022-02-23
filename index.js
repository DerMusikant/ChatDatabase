//Requiring dependencies

const express = require('express')
const app = express()
const server = require('http').Server(app)

const socket = require('./socket').connect

const router = require('./network/routes')
const db = require('./database')

// Good security practice
require('dotenv').config()

db(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME)

//Actual code


//Express variables

app.use(express.json())
app.use(express.urlencoded({extended : false}))
socket(server)
router(app)

app.use('/app', express.static('public'))


server.listen(3000, () => {
    console.log('app ready at: http://localhost:3000')
})