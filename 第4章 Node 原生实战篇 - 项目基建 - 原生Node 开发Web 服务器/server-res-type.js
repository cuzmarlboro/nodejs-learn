var http = require('http')
var fs = require('fs')
var url = require('url') // url 模块专门用于获取请求路径上的参数
var server = http.createServer()
server.listen(8080, function () {
    console.log('http://127.0.0.1:8080');
})

server.on('request', function (req, res) {
    // console.log(req.method)
    if (req.method == "GET") {
        // console.log(req.url)
        // 参数在请求头中

        // 请求头传参的获取方法
        console.log(url.parse(req.url, true).query.id)

        if (req.url == '/') {
            fs.readFile('./index.html', 'utf-8', function (err, data) {
                res.write(data)
                res.end()
            })
        } else {
            fs.readFile('./monica.png', function (err, data) {
                res.end(data)
            })
        }
    } else if (req.method == "POST") {
        // 参数在请求体中
        // console.log('ppp');
        var data = ''
        // 数据是发送给消息体的，消息体发送是分包发送的，所以每当有数据来到服务器的时候就会触发 req.on("data")
        req.on('data', function (d) {
            // console.log(d);
            data += d
        })
        req.on('end', function () {
            console.log(require('querystring').parse(data))
        })

        res.end()
    }

})
