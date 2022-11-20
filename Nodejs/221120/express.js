const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/just.html')
})

app.use(express.static(__dirname))

app.listen(8080, ()=>{ console.log("Port 8080 is connected"); })