const store = require('./store')


//Stores message on the database with extra info (Date, etc)
const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {

    if (!user || !message){
      console.error('Message/controller no [user/message] found')
      return reject('Data error.')
    }

    const info =
    {
      user,
      message,
      date : new Date(),
    }

    store.add(info)

    resolve(info)
  })
}



const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages
}
