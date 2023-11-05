const express = require('express')
const cors = require('cors')
const app= express() 

//Back End (Either to run terminal or local desk terminal)
// cors 全局模块
app.use(cors())

// activate
app.listen('8080','127.0.0.1',()=>{
    console.log('服务启动成功  地址:127.0.0.1 端口 ')
})

const env_env = require('./nodehttp.js')

//create api route
app.use('/env',env_env)
