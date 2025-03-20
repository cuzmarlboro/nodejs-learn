## 目录说明

### router/

路由层，定义 API 路由

- `index.js`: 路由统一入口文件，负责集中管理所有路由模块
  - 创建主路由实例
  - 设置各模块路由前缀
  - 统一挂载子路由模块
- `user.js`: 用户相关路由
- `video.js`: 视频相关路由

### model/

数据模型层，定义数据库模型结构，负责数据库相关操作

- `index.js`: 数据库连接配置
- `baseModel.js`: 基本集合规则
- `userModel.js`: 用户集合规则

### controller/

控制器层，处理请求参数、调用模型层方法、处理业务逻辑、返回响应数据

- `userController.js`: 用户相关业务逻辑
- `videoController.js`:视频相关业务逻辑

### middleware/

中间件层，处理请求的中间环节

- `validator/errorBack.js`: 错误处理中间件
- `validator/userValidator.js`: 用户数据验证中间件
