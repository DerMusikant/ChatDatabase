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

    console.log(info)

    resolve(info)
  })
}

module.exports = {
  addMessage,
}
