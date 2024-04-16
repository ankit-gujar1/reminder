require('dotenv').config();

const express=require('express');
const app=express();

const mongoose = require('mongoose');
const cors = require('cors');

const userRouter=require('./routes/userRoutes');
const reminderRouter=require('./routes/remiderRoutes');

const test=require('./controllers/test');

app.use(cors());
app.use(express.json());

app.use(userRouter);
// use requireAuth here to protect routes of remaining application 
// app.use(requireAuth);
app.use(test); //without valid token /test route will not be accessible
app.use(reminderRouter);
// app.use(requireAdminAuth);
// app.use(adminRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})

