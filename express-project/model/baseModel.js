/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 14:12:06
 * @LastEditors: hezeying@xdf.cn
 * @LastEditTime: 2025-03-20 17:24:14
 * @FilePath: /express-project/model/baseModel.js
 * @Description: 基本集合规则
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
module.exports = {
    // 创建时间
    createAt: {
        type: Date,
        default: Date.now()
    },
    // 更新时间
    updateAt: {
        type: Date,
        default: Date.now()
    }
}


