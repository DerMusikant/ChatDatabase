//Requiring mongo to connect to a database and model to save data
const db = require('mongoose')
const Model = require('./model')

// Good security practice
require('dotenv').config()
const USER = process.env.DB_USER
const PASS = process.env.DB_PASSWORD
const NAME = process.env.DB_NAME

// Setting database promises and URI
db.Promise = global.Promise
db.connect(`mongodb+srv://${USER}:${PASS}@${NAME}.cx6yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true
})

console.log('Database connected succesfully')



// Actual code

const addMessage = (message) => {
  const newMessage = new Model(message)
  newMessage.save()
}

const getMessages = async () => {
  return await Model.find()
}

module.exports = {
  add: addMessage,
  list: getMessages
}
