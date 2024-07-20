var inquirer = require('inquirer')
var config = require('../../config')
var downloadFun = require('./download')

const action = async function (project, args) {
    // 命令行执行逻辑代码

    // inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'framwork',
    //         choices: config.framwork,
    //         message: '请选择你所使用的框架'
    //     }
    // ]).then((answer) => {
    //     console.log('answer', answer)
    // })



    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'framwork',
            choices: config.framwork,
            message: '请选择你所使用的框架'
        }
    ])

    // 下载代码模板
    downloadFun(config.foramworkUrl[answer.framwork], project)
}

module.exports = action