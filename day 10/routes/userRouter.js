const express= require('express');
const userController=require('../controllers/userControllers.js')

const userRouter= express.Router();

userRouter.route('/')
.get(userController.getUser)
.post(userController.postUser);


module.exports= userRouter;