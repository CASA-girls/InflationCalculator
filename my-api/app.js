const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.listen('8080', '127.0.0.1', () => {
    console.log('Server started successfully at address: 127.0.0.1 port 8080');
})

const env_env = require('./Node.js')
//Add API path
app.use('/env', env_env)
