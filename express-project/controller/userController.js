/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 13:21:09
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-17 14:14:11
 * @FilePath: /nodejs-learn/express-project/controller/userController.js
 * @Description: 用户业务模块
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const fs = require('fs')
const { promisify } = require('util')
const { User } = require('../model')
const { createToken } = require('../util/jwt')

// 将fs.rename方法转换为promise对象
const rename = promisify(fs.rename)

// 用户注册
exports.register = async (req, res, next) => {
    const userModel = new User(req.body) // 创建用户文档
    const dbBack = await userModel.save() // 保存用户到集合中
    const user = dbBack.toJSON()
    delete user.password
    res.status(200).json({ user })
}

// 用户登录
exports.login = async (req, res, next) => {
    // 客户端数据验证，链接数据库查询
    let dbBack = await User.findOne(req.body)
    // 返回响应
    if (!dbBack) {
        return res.status(402).json({ error: '邮箱或密码错误' })
    }
    dbBack = dbBack.toJSON()

    // 生成token
    dbBack.token = await createToken(dbBack)

    res.status(200).json({ dbBack })
}
// 更新用户信息
exports.update = async (req, res, next) => {
    // 获取用户id
    const id = req.userinfo._id
    // 通过id更新用户信息 { new: true } 表示返回更新后的数据
    const dbBack = await User.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json({ user: dbBack })
}


// 用户上传头像
exports.headimg = async (req, res, next) => {


    // 获取文件后缀名
    const fileArr = req.file.originalname.split('.')
    const fileType = fileArr[fileArr.length - 1]


    try {
        // 给已经上传到 public 目录下的文件重命名 （加上文件后缀）
        await rename(`./public/${req.file.filename}`, `./public/${req.file.filename}.${fileType}`)

        // 修改用户头像
        // await User.findByIdAndUpdate(req.userinfo._id, { image: `${req.file.filename}.${fileType}` })
        res.status(200).json({ filepath: `${req.file.filename}.${fileType}` })
    } catch (error) {
        res.status(500).json({ error })
    }

}

// 用户列表
exports.list = async (req, res, next) => {
    res.send('/user-list')
}

exports.detail = async (req, res, next) => {
    res.send('/user-detail')
}

exports.delete = async (req, res, next) => {
    res.send('/user-delete')
}