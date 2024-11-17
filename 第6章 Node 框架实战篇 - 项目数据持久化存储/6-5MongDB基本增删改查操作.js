
// 往集合插入一条数据
db.集合名.insertOne({})

// 往集合插入多条数据
db.集合名.insertMany([{},{}])

// 查找集合内容
db.集合名.find({})

// 根据 username 查找
db.集合名.find({username:"张三"})

// 查找年龄大于 20 岁的人
db.集合名.find({age:{$gt:20}})

// 只查找一条年龄大于 20 岁的人
db.集合名.findOne({age:{$gt:20}})

// 删除集合内容
db.集合名.deleteOne({})

// 删除年龄为20的人
db.集合名.deleteOne({age:20})

// 删除年龄大于 20 的人
db.集合名.deleteMany({age:{$gt:20}})

// 删除集合多条数据
db.集合名.deleteMany({})

// 更新集合内容，第一个参数是查询条件，第二个参数是更新内容
db.集合名.updateOne({},{})

// 将张三年龄更新为 30
db.集合名.updateOne({username:"张三"},{$set:{age:30}})

// 更新集合多条数据
db.集合名.updateMany({},{})


