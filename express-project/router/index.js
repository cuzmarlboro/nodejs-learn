/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-03-20 17:26:52
 * @FilePath: /express-project/router/index.js
 * @Description: 路由层，定义 API 路由
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const router = express.Router() // 生成路由实例对象

// 挂载video路由
router.use('/video', require('./video'))

// 挂载user路由
router.use('/user', require('./user'))

module.exports = router