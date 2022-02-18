const Model = require('./model')


// Actual code

const addMessage = (message) => {
  const newMessage = new Model(message)
  newMessage.save()
}

const getMessages = (filterChat) => {
  return new Promise( (resolve, reject) => {
    let filter = {}
    if(filterChat){
      filter.chat =  filterChat
    }
    Model.find(filter)
    .populate('user', 'name')
    .exec((error, populated) => {
      if (error) {
        reject(error)
        return null
      }
      resolve(populated)
    })
    }
  )
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
