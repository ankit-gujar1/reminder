const mongoose = require('mongoose');

const reminderSchema=mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        type:String
    },
    importance:{
        required:true,
        type:Number
    },
    end: {
        required: true,
        type: Date
    },
    user_id:{
        required:true,
        type:String
    },
    user_name:{
        required:true,
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Task",reminderSchema);