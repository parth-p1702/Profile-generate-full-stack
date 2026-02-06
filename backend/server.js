/*
@ Server.js file used for Start server and database
*/

require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/config/database')

connectDB();

app.listen(3000,()=>{
    console.log('Server is start at port no. 3000');
})