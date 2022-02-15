const store = require('./store')


//Stores a new user on the database with name
const addUser = (name) => {
  return new Promise((resolve, reject) => {
    if (!name){
      console.error('User/controller no [details] found')
      return reject('Data error.')
    }
    const info = {
      name
    }

    store.add(info)

    resolve(info)
  })
}


const getUser = (filter) => {
    return store.get(filter)
}


module.exports = {
  addUser,
  getUser
}
