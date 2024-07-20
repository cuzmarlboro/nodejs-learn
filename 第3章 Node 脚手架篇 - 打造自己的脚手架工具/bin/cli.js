#! /usr/bin/env node
// 指定需要使用操作系统环境变量 node 来运行该指令，必须在第一行加上

// #########

// 获取命令后面所跟的参数
// 比如输入 mycli --help ， process.argv[2] 则是 --help
// console.log(process.argv[2])

// if (process.argv[2] === '--help') {
//     console.log('获取到了命令参数')
// }

// #########


// 使用 commander 获取命令行参数
// const { program } = require('commander')

// program.option('-f --framwork <framwork>', '设置框架')
// program.parse(process.argv)


// #########

// 使用 commander 处理自定义选项参数
const { program } = require('commander')

// program.option('-f --framwork <framwork>', '设置框架')

// #########
// 模块化导入 help 处理模块
const myHelp = require('../lib/core/help')
myHelp(program)

// 创建出 create 命令选项
// alias 是创建别名，执行 mycli create 和执行 mycli crt 效果一样
// description 是创建说明内容
// program.
//     command('create <project> [other...]').
//     alias('crt').
//     description('创建项目').
//     action((project, args) => {
//         // 命令行执行逻辑代码
//         console.log(project, args)
//     })

const mycommander = require('../lib/core/mycommander')
mycommander(program)



program.parse(process.argv)