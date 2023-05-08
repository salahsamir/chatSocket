const baseUrl='http://localhost:5000/'
const client=io(baseUrl)

let msg=document.getElementById("msg")
let message=document.getElementById("message")


let sendMessage=()=>{
    let message=msg.value

    client.emit("msg",message)
    msg.value=" "
}

client.on("chat",(data)=>{
  
    var item = document.createElement('li');
    item.textContent = data;
    message.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})
msg.addEventListener("input",()=>{
    client.emit("type")
})
msg.addEventListener("keyup",()=>{
    client.emit("stop")
})

client.on("userTyping",()=>{
   document.getElementById("type").innerHTML="typing ......"
})
client.on("stopTyping",()=>{
   setTimeout(()=>{
    document.getElementById("type").innerHTML=""
   },1000)
 })