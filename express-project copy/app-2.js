/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 12:28:13
 * @FilePath: /nodejs-learn/express-project/app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')


const app = express()

const PORT = process.env.PORT || 3000

// 应用程序级别中间件使用方式
app.get('/user', (req, res, next) => {
  // 中间件处理内容
  console.log('666')
  next()
},(req, res)=>{
  res.send('/user')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
