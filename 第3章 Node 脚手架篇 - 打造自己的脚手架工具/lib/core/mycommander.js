/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-20 22:29:07
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-13 19:24:19
 * @FilePath: /nodejs-learn/第3章 Node 脚手架篇 - 打造自己的脚手架工具/lib/core/mycommander.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const myaction = require('./action')

const mycommander = function (program) {
    program.
        command('create <project> [other...]').
        alias('crt').
        description('创建项目').
        action(myaction)
}

module.exports = mycommander
