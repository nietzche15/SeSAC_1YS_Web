const express = require('express');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');

app.use( express.static('static') );

app.get('/ejs', (req,res)=>{
    res.render('ex29',{
        title : 'Exercise 29'
    })
})

app.listen(port, ()=>{
    console.log('Port '+ port + ' is connected');
})

