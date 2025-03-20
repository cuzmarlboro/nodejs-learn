/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 14:36:14
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-03-20 17:32:41
 * @FilePath: /express-project/middleware/validator/userValidator.js
 * @Description: 用户验证中间件
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

const { body } = require('express-validator')
const { User } = require('../../model') // 引入用户集合
const validator = require('./errorBack') // 引入错误返回中间件


// 用户注册验证
module.exports.register = validator([
    body('username')
        .notEmpty().withMessage('用户名不能为空').bail()
        .isLength({ min: 1 }).withMessage('用户名长度不能小于1').bail(),
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('邮箱格式不正确').bail()
        .custom(async (val) => {
            const emailValidate = await User.findOne({ email: val })
            if (emailValidate) {
                return Promise.reject('邮箱已被注册')
            }
        }).bail(),
    body('phone')
        .notEmpty().withMessage('手机号不能为空').bail()
        .isMobilePhone('zh-CN').withMessage('手机号格式不正确').bail()
        .custom(async (val) => {
            const phoneValidate = await User.findOne({ phone: val })
            if (phoneValidate) {
                return Promise.reject('手机号已被注册')
            }
        }).bail(),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()
        .isLength({ min: 6 }).withMessage('密码长度不能小于6位').bail()
])

// 用户登录验证
module.exports.login = validator([
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('邮箱格式不正确').bail()
        .custom(async (val) => {
            const emailValidate = await User.findOne({ email: val })
            if (!emailValidate) {
                return Promise.reject('邮箱未注册')
            }
        }).bail()
    ,
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()

])

// 更新用户信息验证
module.exports.update = validator([
    body('email')
        .custom(async (val) => {
            const emailValidate = await User.findOne({ email: val })
            if (emailValidate) {
                return Promise.reject('邮箱已被注册')
            }
        }).bail()
    ,
    body('username')
        .custom(async (val) => {
            const usernameValidate = await User.findOne({ username: val })
            if (usernameValidate) {
                return Promise.reject('用户名已被注册')
            }
        }).bail()
    ,
    body('phone')
        .custom(async (val) => {
            const phoneValidate = await User.findOne({ phone: val })
            if (phoneValidate) {
                return Promise.reject('手机号已被注册')
            }
        }).bail()
    ,
])