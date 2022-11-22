const express =require('express');
const app = express();
const port = 3030;

app.listen( port, ()=>{
    console.log( port +' port is connected');
})

app.use(express.static('./'));

app.get('/', ( req, res )=>{
    res.sendFile(__dirname + '/just.html');
})