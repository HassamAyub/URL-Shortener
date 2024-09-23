const mongoose=require('mongoose');
const USER=require('../Models/UserM');

async function handleSignup(req,res) {
    const body=req.body;
    if(!body){console.log('Invalid data')}

    try {
        await USER.create({
            fullname:body.fullname,
            email:body.email,
            password:body.password,
        })
        return res.render('signup',{
            msg:body.email,
        })
    } catch (error) {
        return res.status(500).json({error:error});
    }
}

module.exports={
    handleSignup,
}