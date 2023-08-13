const express= require('express')
const app = express();
const http= require('http');
const {Server} = require('socket.io')
const server = http.createServer(app);

const io= new Server(server);

const PORT= process.env.PORT || 5000; //So as to run on 5000 if environment does not allow.

io.on('connection', (socket)=>{
    console.log("New user connected with socket id ", socket.id);
})

server.listen(PORT, ()=>{
    console.log(`Listenign on ${PORT} `)
})