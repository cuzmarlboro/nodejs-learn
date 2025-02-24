/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-26 11:17:44
 * @FilePath: /nodejs-learn/express-project/app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
const app = express()

// 挂载json解析中间件 （可以解析客户端发来application/json格式的请求体）
app.use(express.json())
// 挂载urlencoded解析中间件 （可以解析客户端发来urlencoded格式的请求体）
app.use(express.urlencoded())
// 挂载cors中间件，解决跨域问题 （默认允许所有跨域）
app.use(cors())
// 挂载morgan中间件，记录日志 (开发模式下记录日志)
app.use(morgan('dev'))
// 挂载路由
app.use('/api/v1', router)
// 挂载静态资中间件 （将public目录下的文件暴露出去）
app.use(express.static('public'))


const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
