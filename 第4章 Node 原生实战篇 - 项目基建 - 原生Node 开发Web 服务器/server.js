/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-20 23:45:21
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-15 11:08:55
 * @FilePath: /nodejs-learn/第4章 Node 原生实战篇 - 项目基建 - 原生Node 开发Web 服务器/server.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 1、导入 http 模块
var http = require('http')
var fs = require('fs')

// 2、创建服务器
// 获取服务器的实例对象
var server = http.createServer()

// 服务器是运行在操作系统下的，而一个操作系统是可以提供各种各样的服务，服务与服务之间在同一个操作系统下是通过不同的端口来区分的
// 所以必须监听成功某个端口才算这个 http 服务启动成功
// 启动服务
server.listen(8888, function () {
    console.log('http://127.0.0.1:8888')
})


// 监听客户端请求事件
server.on('request', function (req, res) {


    // // 设置响应头
    // res.setHeader('Content-type', 'text/plain;charset=utf-8') // 返回纯文本类型
    // res.setHeader('Content-type', 'text/html;charset=utf-8') // 返回html文本类型

    // // req 请求数据信息，res 响应数据信息
    // res.write('你好')

    // // 断开服务
    // res.end()


    if (req.url === '/') {
        // 返回 index.html 的内容
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            res.write(data)
            res.end()
        })
    } else {
        // 因为图片本身就是二进制文件，所以无需设置字符编码
        fs.readFile('./monica.png', function (err, data) {
            // res.end(data) 等价于 res.write(data);res.end();
            res.end(data)
        })
    }


})


// 工具 nodemon
// 执行 nodemon server.js，和执行 node server.js 的区别就是代码修改后不用在手动重启服务，保存后会自动重启