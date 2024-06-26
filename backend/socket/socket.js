import { Server, Socket } from "socket.io";
import http from 'http';
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["https://chatkaro5.vercel.app"],
        methods:["GET","POST"]
    }
});

export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId]

}

const userSocketMap = {}; // {userId: socketId}

io.on('connection',(socket)=>{
    console.log("A user is connected",socket.id);

    const userId = socket.handshake.query.userId;
    console.log("userId",userId);

    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
        console.log("userSocketMap",userSocketMap);
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    })

})

export { app, io, server}
