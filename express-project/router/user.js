/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-03-20 17:33:18
 * @FilePath: /express-project/router/user.js
 * @Description: 用户相关路由
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const router = express.Router() // 生成路由实例对象
const userController = require('../controller/userController') // 引入用户业务模块处理
const userValidator = require('../middleware/validator/userValidator') // 引入用户验证中间件
const { verifyToken } = require('../util/jwt') // 引入jwt验证中间件
const multer = require('multer') // 引入multer中间件，用于文件上传

// 创建文件上传中间件，{ dest: 'public/' } 表示文件上传到public目录下
const upload = multer({ dest: 'public/' })

router
    .post('/register', userValidator.register, userController.register) // 用户注册
    .post('/login', userValidator.login, userController.login) // 用户登录
    .get('/lists', verifyToken, userController.list) // 获取用户列表
    .put('/', verifyToken, userValidator.update, userController.update) // 更新用户信息
    .delete('/', verifyToken, userController.delete) // 删除用户
    .post('/headimg', verifyToken, upload.single('headimg'), userController.headimg) // 上传头像


module.exports = router



