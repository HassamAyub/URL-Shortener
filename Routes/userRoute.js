const express=require('express');
const userRouter=express.Router();
const {
    handleSignup,

}=require('../Controllers/userC');

userRouter.post('/signup',handleSignup)

module.exports=userRouter;