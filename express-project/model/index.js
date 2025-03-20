// 引入mongoose
const mongoose = require('mongoose')

const { mongopath } = require('../config/config.default')


async function main() {
    // 连接数据库 (url: 数据库地址, 端口, 数据库名称)
    await mongoose.connect(mongopath)
}

main()
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log('数据库连接失败', err)
    })


module.exports = {
    User: mongoose.model('User', require('./userModel')) // 创建用户集合，第一个参数是集合名称，第二个参数是集合规则
}
