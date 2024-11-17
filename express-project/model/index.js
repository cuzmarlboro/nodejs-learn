/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 13:37:29
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 17:06:23
 * @FilePath: /nodejs-learn/express-project/model/index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
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
