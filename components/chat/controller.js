const store = require('./store')


//Stores message on the database with extra info (Date, etc)
const addChat = (users, name) => {
  return new Promise((resolve, reject) => {
    if (!users || !name || !Array.isArray(users)){
      console.error('Chat/controller no [users/name] found')
      return reject('Data error.')
    }
    const info = {
      name,
      users
    }

    store.add(info)
    resolve(info)
  })
}



const getChats = ( filterUser ) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(filterUser))
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
