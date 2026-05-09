import express from "express";
import {Server} from "socket.io"
import http from "http";
import cors from "cors";

const app=express();

app.use(cors());

const server= http.createServer(app);

const io= new Server(server,{
    cors:{
        origin:"http://localhost:5173"
    }
})
let connectedUsers=0

io.on("connection",(socket)=>{
    console.log("new user is connected : "+socket.id);
    connectedUsers++

    io.emit("total-connected-users",connectedUsers)

    socket.emit("welcome",{messg:"welcome user "+socket.id})

    socket.on("private-messg",({to,messg})=>{
        io.to(to).emit("receiver-private-messg",{from: socket.id,messg})
    })

    socket.on("join-room",({roomName})=>{
        socket.join(roomName);
        console.log(socket.id+"join group :"+roomName)
        socket.to(roomName).emit("room-messg",{
            messg:socket.id+ "joined the room",
        })
    })

    socket.on("send-messg-room",({roomName,messg})=>{
        console.log(socket.id+"send messg in group : "+ roomName +" messg is : "+messg)
        io.to(roomName).emit("recive-room-meesg",{
            senderID:socket.id,
            messg:messg
        })
    })


    socket.on("disconnect",()=>{
        console.log("user Disconnected : "+socket.id)
        connectedUsers--
        io.emit("total-connected-users",connectedUsers)
    })


})


app.get("/",(req,res)=>{
    console.log("req is for URL /")
    res.send("Server at port 5000")

})

server.listen(5000,()=>{
    console.log("Server is running at port 5000");
})
