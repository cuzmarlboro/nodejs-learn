/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 14:12:06
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 14:12:29
 * @FilePath: /nodejs-learn/express-project/model/baseModel.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
}