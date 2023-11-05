const express = require('express')
const cors = require('cors')
const app= express() 

//Back End (Either to run terminal or local desk terminal)
// cors 
app.use(cors())

// activate
app.listen('8080','127.0.0.1',()=>{
    console.log('Service Activated Successful,  address:127.0.0.1 port ')
})

const env_env = require('./nodehttp.js')

//create api route
app.use('/env',env_env)
