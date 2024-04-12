require('dotenv').config();

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}

const loginUser=async(req,res)=>{
    const {userName,password}=req.body;

    try{
        const u=await User.login(userName,password);
        const token=createToken(u._id);
        res.status(200).json({userName,token});
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const signupUser=async(req,res)=>{
    const {userName,password}=req.body;

    try{
        const u=await User.signup(userName,password);
        const token=createToken(u._id);
        res.status(200).json({userName,token});
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

module.exports={loginUser,signupUser}