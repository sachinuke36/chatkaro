import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/db.js';
import router from './routes/authRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import conversationRoutes from '../backend/routes/conversationRoutes.js'
import userRoutes from '../backend/routes/userRoutes.js'
import {app, server} from './socket/socket.js'

dotenv.config();
const port =  process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


app.get('/',(req,res)=>{
    res.send("working");
})
app.use('/api/auth',router);
app.use('/api/messages',conversationRoutes)
app.use('/api/users',userRoutes)


server.listen(port,()=>{
    connectToMongoDB();
    console.log(`server is running on port https://chatkaro-3.onrender.com`)
})