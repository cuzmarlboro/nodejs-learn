/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 12:21:18
 * @FilePath: /nodejs-learn/express-project/app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')


const app = express()

const PORT = process.env.PORT || 3000

// // 挂载路由
// app.use('/api', router)

// // 挂载统一处理服务端错误中间件
// app.use(errorHandler())

// 使用中间件
app.use((req, res, next)=>{
  // 记录日志
  console.log(`${req.method},${req.url},${Date.now()}`)
  next()
})

app.get('/', (req, res) => {
  res.send('/index')
})

app.get('/register', (req, res) => {
  res.send('/register')
})

app.get('/login', (req, res) => {
  res.send('/login')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
