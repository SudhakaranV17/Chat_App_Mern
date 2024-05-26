import { Server } from "socket.io";
import http from 'http';
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"]
    }
})
// instant message
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {};
const LastSeen = new Date();
io.on('connection', (socket) => {
    console.log("user connected: ", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }
    io.emit("getLastSeen", LastSeen)

    // io.emit() to send event to all users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on('disconnect', () => {
        console.log("user disconnected: ", socket.id);
        console.log(LastSeen);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        io.emit("getLastSeen", LastSeen)
    })
})



export { app, io, server };