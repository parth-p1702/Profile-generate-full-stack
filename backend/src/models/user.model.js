const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:String,
    description:String,
    url:String
})

const userSchema = mongoose.model('users',user);

module.exports = userSchema