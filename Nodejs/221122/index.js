const express = require('express');
const app = express();
const port = 8080;

app.get('/', ( req, res)=>{
    res.send('Hello Express!');
})

app.get('/test', ( req, res)=>{
    res.send('Welcome to test page');
})

app.listen( port, ()=>{
    console.log('Server port : ', port);
})