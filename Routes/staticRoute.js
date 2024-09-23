const express=require('express')
const staticRoute=express.Router();
const URL=require('../Models/urlModel.js')

staticRoute.get('/',async (req,res)=>{
    const urllist = await URL.find({})        
        return res.render('home',{urls:urllist});
})

staticRoute.get('/signup',async (req,res)=>{
    return res.render('signup');
})
staticRoute.get('/login',async (req,res)=>{
    return res.render('login');
})

module.exports=staticRoute;