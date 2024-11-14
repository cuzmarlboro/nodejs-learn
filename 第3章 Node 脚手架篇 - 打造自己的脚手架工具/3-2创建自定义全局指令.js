/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-07-20 04:45:28
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-13 17:23:23
 * @FilePath: /nodejs-learn/第3章 Node 脚手架篇 - 打造自己的脚手架工具/3-2创建自定义全局指令.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 创建全局自定义指令
// 先创建项目，比如 bin/cli.js ，然后在 bin 项目所在同级的路径下执行 npm init，项目名称设置为 mycli，
// 获得的 package.json 则会有   "bin": { "mycli": "bin/cli.js" }， 在根目录下执行 npm link 挂在命令到全局命令行工具中

