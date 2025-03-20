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

// 启动服务器
const PORT = process.env.PORT || 8888
// 监听端口
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

