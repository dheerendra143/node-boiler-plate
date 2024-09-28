const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/user.controllers');

userRouter.get('/', userController.userListCtrl);


module.exports = userRouter;