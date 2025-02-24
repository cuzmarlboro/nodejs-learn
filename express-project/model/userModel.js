/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 13:56:05
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-26 11:17:23
 * @FilePath: /nodejs-learn/express-project/model/userModel.js
 * @Description: 用户集合规则
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 引入mongoose
const mongoose = require('mongoose')

// 引入md5
const md5 = require('../util/md5')

// 引入基础集合规则
const baseModel = require('./baseModel')


// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String, // 类型
        required: true, // 必填
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        set: (val) => md5(val), // 使用md5加密密码
        select: false // 查询时隐藏密码
    },
    image: { // 头像
        type: String,
        default: null
    },
    cover: { // 封面
        type: String,
        default: null
    },
    channeldes: { // 频道描述
        type: String,
        default: null
    },
    ...baseModel
})


module.exports = userSchema