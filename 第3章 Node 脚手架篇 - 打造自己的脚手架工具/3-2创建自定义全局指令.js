// 创建全局自定义指令
// 先创建项目，比如 bin/cli.js ，然后在 bin 项目所在同级的路径下执行 npm init，项目名称设置为 mycli，
// 获得的 package.json 则会有   "bin": { "mycli": "bin/cli.js" }， 在根目录下执行 npm link 挂在命令到全局命令行工具中