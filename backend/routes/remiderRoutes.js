const express = require('express');
const router=express.Router();

const {getAllAllTask,getAllUser} = require('../controllers/adminController');
const requireAdminAuth=require('../middlewares/requireAdminAuth');
const requireAuth=require('../middlewares/requireAuth');

const {getAllTasks,getOneTask,postTask,deleteTask,updateTask,getAllHighPriorityTasks}=require('../controllers/reminderController');

//routes for users
router.get('/',requireAuth,getAllTasks);
router.get('/:id',requireAuth,getOneTask);
router.post('/',requireAuth,postTask);
router.patch('/:id',requireAuth,updateTask);
router.delete('/:id',requireAuth,deleteTask);
router.get('/highpriority/ll',requireAuth,getAllHighPriorityTasks);

//routes for admin
router.get('/admin/tasks',requireAdminAuth,getAllAllTask);
router.get('/admin/users',requireAdminAuth,getAllUser);

module.exports=router;