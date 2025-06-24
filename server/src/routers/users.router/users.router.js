const express = require('express');
const { registerController, userLoginController } = require('./users.controller');
const userRouter = express.Router();
userRouter.post('/registeruser',registerController);
userRouter.post('/userlogin',userLoginController);
module.exports = userRouter;