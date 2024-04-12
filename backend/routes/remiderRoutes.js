const express = require('express');
const router=express.Router();

const {getAllTasks,getOneTask,postTask,deleteTask,updateTask}=require('../controllers/reminderController');

router.get('/',getAllTasks);
router.get('/:id',getOneTask);
router.post('/',postTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports=router;