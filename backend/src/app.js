/*
@ app.js file used for create server, cofigure and schema operations 
*/

const express = require('express')
const cors = require('cors')
const userSchema = require('./models/user.model')
const path  = require('path')

const app = express() // create instance of express server

app.use(express.json()) // this middleWare handle client request 
app.use(cors()) // this middleWare allow to server accept other ports number request
app.use(express.static('./public'))


// POST api
app.post('/api/users',async(req,res)=>{
    const {name, description, url} = req.body;

    const user = await userSchema.create({
        name,
        description,
        url
    })

    res.status(201).json({
        message:"successfully created!",
        user
    })

})

// GET api
app.get('/api/users',async(req,res)=>{
    const user = await userSchema.find();

    res.status(200).json({
        message:"all data fetch successfully!",
        user
    })
})

// DELETE api
app.delete('/api/users/:id',async(req,res)=>{
    const {id} = req.params
    await userSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"user delete successfully!"
    })
})

// wildCard entry
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})

module.exports = app;