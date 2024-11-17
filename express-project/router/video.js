/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 21:23:36
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 15:21:03
 * @FilePath: /nodejs-learn/express-project/router/video.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const express = require('express')
const router = express.Router() // 生成路由实例对象
const videoController = require('../controller/videoController')

// 路由级别中间件使用方式
router.get('/lists', videoController.list)


module.exports = router