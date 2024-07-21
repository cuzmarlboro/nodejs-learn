// 引入 express
const express = require('express')
// 引入 fs (读取文件模块)
const fs = require('fs')
// 引入 promise 化工具
const { promisify } = require('util')

// 将 fs.readFile 变成 promise 化
const readFile = promisify(fs.readFile)

// 将 fs.writeFile 变成 promise 化
const writeFile = promisify(fs.writeFile)

// 获取 express 全局应用
const app = express()

const db = require('./db')

// express.urlencoded() 是一个内置的中间件函数。
// 它主要用于处理 HTML 表单提交的数据，这些数据通常是以 URL 编码的形式发送的。
// 当设置为 app.use(express.urlencoded()) 时，它会应用到所有的路由请求中。
// 默认情况下，它只能解析 application/x-www-form-urlencoded 类型的数据。
// 解析后的数据会被添加到 req.body 属性中，使得在路由处理函数中可以方便地访问这些数据。
// app.use(express.urlencoded())


//express.json() 中间件会检查请求的 Content-Type 头部，
// 如果是 application/json 或者 text/json 类型的请求，
// Express 会将请求体中的 JSON 数据解析为 JavaScript 对象，
// 并将其附加到请求对象的 req.body 属性上，供后续的路由处理程序访问和操作
app.use(express.json())

// 监听客户端发送过来的 get 请求
app.get('/', async function (req, res) {
    // 请求对象req和响应对象res是经过 express 二次封装的，和 node 原生会有些不同

    // 读取 db.json 内容
    // fs.readFile('./db.json', 'utf-8', (err, data) => {
    //     if (!err) {
    //         var back = JSON.parse(data)
    //         // 返回数据给客户端
    //         res.send(back.users)
    //     } else {
    //         // 设置返回给客户端的状态码
    //         res.status(500).json({ err })
    //     }
    // })


    try {
        // const back = await readFile('./db.json', 'utf-8')
        // res.send(JSON.parse(back).users)

        let back = await db.getDb()
        res.send(back.users)
    } catch (error) {
        res.status(500).json({ error })
    }

})

// 监听客户端发送过来的 post 请求
app.post('/', async (req, res) => {



    // 可以通过请求头 req['content-type']，判断客户端用什么样的方式发送数据


    const { body } = req

    // 客户端传空值错误处理
    if (!body) {
        res.status(500).json({ error: "缺少用户信息" })
    }

    // 将数据插入 db.json

    // 获取最后一个用户的 id
    // const back = await readFile('./db.json', 'utf-8')
    // const jsonObj = JSON.parse(back)
    let jsonObj = await db.getDb()

    body.id = jsonObj.users[jsonObj.users.length - 1].id + 1

    // 添加操作
    jsonObj.users.push(body)

    try {
        // 写入到 db.json
        // const w = await writeFile('./db.json', JSON.stringify(jsonObj))
        let w = await db.serveDb(jsonObj)

        if (!w) {
            // 成功响应
            res.status(200).send({ msg: '添加成功' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }


})

// 监听客户端发送过来的 put 请求
// 用占位符 id 来接收客户端传过来的变量
app.put('/:id', async (req, res) => {
    // 获取客户端传过来的 id
    // console.log(req.params.id)

    try {
        const userInfo = await db.getDb()
        const userId = Number.parseInt(req.params.id)
        const user = userInfo.users.find(item => item.id === userId)

        if (!user) {
            res.status(403).json({
                error: '用户不存在'
            })
        }

        const body = req.body
        user.username = body.username ? body.username : user.username
        user.age = body.age ? body.age : user.age
        userInfo.users[userId - 1] = user
        if (!await db.serveDb(userInfo)) {
            res.status(201).json({
                msg: '修改成功'
            })
        }

    } catch (error) {
        res.status(500).json({ error })
    }
})

// 监听端口，启动服务
app.listen(3000, () => { })


