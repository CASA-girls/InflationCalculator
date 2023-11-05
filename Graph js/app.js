const express = require('express')
const cors = require('cors')
const app= express()

// 后端服务~~
//注册 cors 全局模块
app.use(cors())

// 启动语句
app.listen('8080','127.0.0.1',()=>{
    console.log('服务启动成功  地址:127.0.0.1 端口 ')
})

const env_env = require('./nodehttp.js')
//添加api 路径
app.use('/env',env_env)
