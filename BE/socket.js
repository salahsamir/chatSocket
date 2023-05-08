import { Server } from "socket.io"
let io
export let getInit=(server)=>{
    io=new Server(server,{
        cors:"*"
    })
    return io
 }
 export let getIo=()=>{
    if(!io){
        throw new Error("invalid io")
    }
    return io
 }