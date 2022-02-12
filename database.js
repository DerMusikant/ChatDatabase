const db = require('mongoose')

db.Promise = global.Promise

const connect = async (USER, PASS, NAME) => {
  await db.connect(`mongodb+srv://${USER}:${PASS}@${NAME}.cx6yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  })

  console.log('Database connected succesfully')
}

module.exports = connect
