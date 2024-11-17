/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 12:57:15
 * @FilePath: /nodejs-learn/express-project/app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const router = require('./router')
const videoRouter = require('./router/video')
const app = express()

// 匹配所有请求方法，无论是get还是post，都会匹配到
// app.all('/xxx', (req, res, next) => {
//   res.send('xxx')
// })

// 正则匹配 ? 前面字符表示可有可无，匹配 /user 和 /uer
app.get('/us?er', (req, res, next) => {
  res.send(`${req.method},${req.url}`)
})

// * 表示通配符，可以在当前位置匹配任意字符
// app.get('/us*er', (req, res, next) => {
//   res.send(`${req.method},${req.url}`)
// })

// app.get('/user/:id/video/:vid', (req, res, next) => {
//   console.log(req.params) // { id: xxxx, vid: xxxx }
//   res.send(`${req.method},${req.url},${req.params.id},${req.params.vid}`)
// })

// 链式调用
app.route('/user')
  .get((req, res, next) => {
    res.send('get')
  })
  .post((req, res, next) => {
    res.send('post')
  })

const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
