//Requiring dependencies

const express = require('express')
const router = require('./network/routes')
const db = require('./database')

// Good security practice
require('dotenv').config()

db(process.env.MSG_USER, process.env.MSG_PASSWORD, process.env.MSG_NAME)

//Actual code


//Express variables
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
router(app)


app.listen(3000)

console.log('app ready at: http://localhost:3000')
