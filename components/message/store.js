const Model = require('./model')


// Actual code

const addMessage = (message) => {
  const newMessage = new Model(message)
  newMessage.save()
}

const getMessages = async (filterUser) => {
  let filter = {}
  if(filterUser){
    filter.user = new RegExp(filterUser, "i") /* Mongo can recieve regular expressions on searches,
                                                in this case, the flag "i" means "Case insensitive"
                                                (Which also results on a partial match finder) */
  }
  return await Model.find(filter)
}

const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    })

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

const deleteMessage = (id) => {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  get: getMessages,
  update: updateText,
  delete: deleteMessage
}
