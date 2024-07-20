/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-20 23:05:14
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-07-20 23:05:23
 * @FilePath: /nodejs-learn/第3章 Node 脚手架篇 - 打造自己的脚手架工具/test/download.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const download = require('download-git-repo')
download('direct:git@gitee.com:beiyaoyaoyao/egg-template.git', './xxx', { clone: true }, (err) => {
    console.log(err);
})