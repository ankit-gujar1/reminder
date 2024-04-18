const { default: mongoose } = require('mongoose');
const Task=require('../models/reminderModel');

const getAllTasks=async(req,res)=>{
    const user_id=req.user._id;
    try{
        const r=await Task.find({user_id}).sort({createdAt: -1});
        res.status(200).json(r);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const getAllHighPriorityTasks=async(req,res)=>{
    const user_id=req.user._id;
    try{
        // const rr=await Task.find({user_id})
        const r=await Task.find({user_id,importance: 3});
        
        res.status(200).json(r);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const postTask=async(req,res)=>{
    const user_id=req.user._id;
    const user_name=req.user.userName;
    const {title,importance,description,end}=req.body;
    try{
        const r=await Task.create({title,importance,description,end,user_id,user_name});
        res.status(200).json(r);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

const getOneTask=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Task not found"});
    const r=await Task.findById(id);
    if(!r) return res.status(404).json({error:"Task not found"});
    res.status(200).json(r); 
}

const deleteTask=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Task not found"});
    const r=await Task.findOneAndDelete({_id:id});
    if(!r) return res.status(404).json({error:"Task not found"});
    res.status(200).json(r); 
}

const updateTask=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Task not found"});
    const r=await Task.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!r) return res.status(404).json({error:"Task not found"});
    res.status(200).json(r); 
}

module.exports={getAllTasks,getOneTask,postTask,deleteTask,updateTask,getAllHighPriorityTasks};