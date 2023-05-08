import express from'express'
import { Server } from 'socket.io'
import connectDB, { postModel } from './post.model.js'
import { getInit, getIo } from './socket.js'
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
connectDB()
const server=app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const io=getInit(server)

io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on("msg",(data)=>{
       io.emit("chat",data)

    })
    socket.on("type",()=>{
        socket.broadcast.emit("userTyping")
    })
    socket.on("stop",()=>{
        socket.broadcast.emit("stopTyping")
    })
   
})
