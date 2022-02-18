const
UserModel = require('./user/model')

const userExists = (id) => {
    return new Promise(async (resolve, reject) => {
        await UserModel.find({id})
        .then(data => {
            if (!data._id){
                reject(data)
                return null
            }
            resolve(data)
        })
    })
}