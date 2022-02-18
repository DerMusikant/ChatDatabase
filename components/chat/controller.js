const store = require('./store')


//Stores message on the database with extra info (Date, etc)
const addChat = (users, name) => {
  return new Promise((resolve, reject) => {
    if (!users || !name){
      console.error('Message/controller no [user/message/chat] found')
      return reject('Data error.')
    }
    const info = {
      users,
      name
    }

    store.add(info)

    resolve(info)
  })
}



const getChats = ( filterName ) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(filterName))
  })
}


const deleteChat = (id) => {
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Invalid Parameter')
    }

    store.delete(id)
    .then(() => {
      resolve('Chat deleted succesfully')
    })
    .catch((e) => {
      reject(e)
    })
  })
}


module.exports = {
  addChat,
  getChats,
  deleteChat
}
