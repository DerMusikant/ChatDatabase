const Model = require('./model')


// Actual code

const addUser = (user) => {
  const newUser = new Model(user)
  return newUser.save()
}



const getUser = filterUser => {
  return new Promise(async (resolve, reject) => {
    let filter = {}
    if(filterUser){
      filter.name = new RegExp(filterUser, 'i') /* Mongo can recieve regular expressions on searches,
                                                in this case, the flag "i" means "Case insensitive"
                                                (Which also results on a partial match finder) */
    }
    await Model.find(filter)
    .then(data => {
      if ( data[0]._id){
        resolve(data)
      }
    })
    .catch(e => {
      reject('User not found')
    })
  }
  )
}

module.exports = {
  add: addUser,
  get: getUser
}
