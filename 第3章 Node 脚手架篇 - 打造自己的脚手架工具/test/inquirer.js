#! /usr/bin/env node

var inquirer = require('inquirer')

inquirer.prompt([
    // 一个对象就是一个问题
    { type: 'input', name: 'username', message: '你的名字' }
]).then((answer) => {
    console.log(answer) // 会以对象的形式返回 { username: 'xxx' }
})