/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 16:32:09
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-17 13:45:47
 * @FilePath: /nodejs-learn/express-project/util/jwt.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 引入jwt
const jwt = require('jsonwebtoken')

// 引入promisify （将函数转换为promise）
const { promisify } = require('util')

// 将jwt.sign转换为promise
const sign = promisify(jwt.sign)

// 将jwt.verify转换为promise
const verify = promisify(jwt.verify)

// 密钥
const { secret } = require('../config/config.default')

// 生成token
module.exports.createToken = async (userInfo) => {
    return await sign(userInfo, secret, { expiresIn: '7d' })
}

// 验证token （写成中间件形式）
module.exports.verifyToken = async (req, res, next) => {
    let token = req.headers.authorization

    token = token ? token.split('Bearer ')[1] : null

    if (!token) return res.status(401).json({ error: '请先登录' })


    try {
        let userInfo = await verify(token, secret)
        req.userinfo = userInfo
        next()
    } catch (error) {
        return res.status(402).json({ error: '无效的token' })
    }
}
