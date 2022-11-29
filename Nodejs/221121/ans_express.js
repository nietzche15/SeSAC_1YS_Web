const express =require('express');
const app = express();
const port = 3030;

app.use( express.static('./')); //현재 위치 이하의 dir만 set 가능

app.get('/', ( req, res )=>{
    res.sendFile(__dirname +'/just.html'); 
})

app.listen( port, ()=>{
    console.log( port +' port is connected');
})