/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 12:43:15
 * @FilePath: /nodejs-learn/express-project/app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const router = require('./router')
const videoRouter = require('./router/video')
const app = express()

// 挂载路由，/api 是路由前缀，也是路由的匹配前缀
app.use('/user', router)
app.use('/video', videoRouter)
// 404 中间件
app.use((req, res)=>{
  res.status(404).send('404 页面不存在')
})
// 挂载统一处理服务端错误中间件
app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).send('server error')
})


const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
