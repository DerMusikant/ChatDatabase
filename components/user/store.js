const Model = require('./model')


// Actual code

const addUser = (user) => {
  const newUser = new Model(user)
  return newUser.save()
}

module.exports = {
  add: addUser
}
