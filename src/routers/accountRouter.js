//导入
const express = require("express");
const path = require("path");

//创建路由对象
const accountRouter = express.Router();

//导入accountControl控制器
const accountCtrl = require(path.join(__dirname,"../controllers/accountController.js"))

//接收到请求,然后交给我们这个路由对应的控制器处理
accountRouter.get('/login',accountCtrl.getLoginPage);

accountRouter.get('/vcode',accountCtrl.getVcodeImage);

//导出
module.exports = accountRouter;