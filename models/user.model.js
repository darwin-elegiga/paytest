const {model,Schema  } = require('mongoose');

const userSchema= new Schema({
    username:String,
    password:String,
    barbero:String,
    role: {
        type: String,
        default:'barber'
    }
})

module.exports = model('user', userSchema)