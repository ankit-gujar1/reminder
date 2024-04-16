const { default: mongoose } = require('mongoose');
const Task=require('../models/reminderModel');
const User=require('../models/userModel');

const getAllAllTask=async(req,res)=>{
    try{
        const r=await Task.find({}).sort({createdAt: -1});
        res.status(200).json(r);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const getAllUser=async(req,res)=>{
    try{
        const u=await User.find({}).sort({createdAt: -1});
        res.status(200).json(u);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

module.exports={getAllAllTask,getAllUser};