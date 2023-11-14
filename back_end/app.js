const env = require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const env_env = require('./nodehttp.js')

mysqlPass = process.env.GITHUB_PASSWORD;

//Add API path
app.use('/env', env_env)

app.listen('8851', () => {
    console.log('Server started successfully at address: 127.0.0.1 port 8080');
})