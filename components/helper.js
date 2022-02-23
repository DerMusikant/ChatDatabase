//Made this helper to check some data and avoid annoying exceptions (Basically query input errors)


const { isValidObjectId } = require('mongoose')
const User = require('./user/model')


const isObjectId = ( id ) => {
    return isValidObjectId(id)
}

const userExists = (id) => {
    return User.countDocuments({_id: id}, (err, count) => {
        if(count == 0 || err){
            return false
        }
        return true
    })
}

module.exports = {
    isObjectId,
    userExists
}