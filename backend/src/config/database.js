/*
database.js file where we're create function for connection with database
*/

const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connect");
}

module.exports = connectDB;