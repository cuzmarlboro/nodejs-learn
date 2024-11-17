// 引入crypto模块
const crypto = require('crypto')


module.exports = (str) => {
    return crypto.createHash('md5').update(str).digest('hex')
}