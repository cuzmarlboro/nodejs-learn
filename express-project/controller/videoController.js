/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-16 13:21:09
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-16 13:26:41
 * @FilePath: /nodejs-learn/express-project/controller/videoController.js
 * @Description: 视频业务模块
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
exports.list = async (req, res, next) => {
    res.send('/video-list')
  }
  
exports.detail = async (req, res, next) => {
    res.send('/video-detail')
}
