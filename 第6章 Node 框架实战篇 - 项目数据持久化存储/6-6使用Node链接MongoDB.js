/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-15 20:45:24
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-15 21:19:02
 * @FilePath: /nodejs-learn/第6章 Node 框架实战篇 - 项目数据持久化存储/6-6使用Node链接MongoDB.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 安装 MongoDB
// npm install mongodb

// 引入 MongoDB
const { MongoClient } = require('mongodb')

// 创建 MongoDB 客户端
const client = new MongoClient('mongodb://127.0.0.1:27017')

const main = async () => {
    // 连接 MongoDB
    await client.connect()

    // 获取 mytest 数据库
    const db = client.db('mytest')

    // 获取 cc 集合
    const cc = db.collection('cc')
    // console.log("🚀 ~ main ~ cc:", cc)

    // 查找集合内容
    // const d = await cc.find()
    // console.log("🚀 ~ main ~ d:", await d.toArray())

    // 查询一条年龄大于20的人
    // const d = await cc.findOne({age:{$gt:20}})
    // console.log("🚀 ~ main ~ d:", d)

    // 插入一条数据
    // const result = await cc.insertOne({username:"李四",age:20})
    // console.log("🚀 ~ main ~ result:", result)

    // 插入多条数据
    // const result = await cc.insertMany([{username:"王五",age:20},{username:"赵六",age:21}])
    // console.log("🚀 ~ main ~ result:", result)
    
 
    // 更新一条数据
    // const result = await cc.updateOne({username:"王五"},{$set:{age:32}})
    // console.log("🚀 ~ main ~ result:", result)

    // 更新多条数据 （年龄大于15的人）
    // const result2 = await cc.updateMany({age:{$gt:15}},{$set:{age:32}})
    // console.log("🚀 ~ main ~ result2:", result2)

    // 删除一条数据
    // const result3 = await cc.deleteOne({username:"王五"})
    // console.log("🚀 ~ main ~ result3:", result3)

    // 删除多条数据 （年龄大于15的人）
    const result4 = await cc.deleteMany({age:{$gt:15}})
    console.log("🚀 ~ main ~ result4:", result4)

}

main().finally(() => {
    // 关闭 MongoDB 连接
    client.close()
})