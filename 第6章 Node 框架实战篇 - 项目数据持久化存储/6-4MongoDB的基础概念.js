/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-11-14 20:05:27
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-11-15 20:36:09
 * @FilePath: /nodejs-learn/第6章 Node 框架实战篇 - 项目数据持久化存储/6-4MongoDB的基础概念.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

// MongoDB 基础概念
// 1、数据库存储结构及存储库
// 2、集合
// 3、文档

// MongoDB 
// {
//     // 数据库 Database
//     "京东": {
//       // 集合 Collection，对应关系型数据库中的 Table
//       "用户": [
//         // 文档 Document，对应关系型数据库中的 Row
//         {
//           // 数据字段 Field，对应关系数据库中的 Column
//           "id": 1,
//           "username": "张三",
//           "password": "123"
//         },
//         {
//           "id": 2,
//           "username": "李四",
//           "password": "456"
//         }
//         // ...
//       ],
//       "商品": [
//         {
//           "id": 1,
//           "name": "iPhone Pro Max",
//           "price": 100
//         },
//         {
//           "id": 2,
//           "name": "iPad Pro",
//           "price": 80
//         }
//       ],
//       "订单": []
//       // ...
//     },
  
//     // 数据库
//     "淘宝": {}
  
//     // ...
// }

// 查看所有库列表
// show dbs

// 切换库
// use 库名

// 删除库
// db.dropDatabase()

// 查看当前库
// db

// 往集合中插入数据
// db.集合名.insert({})

// 插入数据后 mongoDB 会生成一个主键 _id，_id 是唯一标识，类型是 ObjectId

// 删除集合
// db.集合名.drop()

// 查看所有集合
// show collections

