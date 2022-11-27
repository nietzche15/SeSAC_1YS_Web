const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.json());

app.use( '/views', express.static(__dirname+'/views'));
app.use( express.static('static'));



app.get('/form', (req,res)=>{
    res.render('form_static');    
})

app.get('/getForm',(req,res)=>{
    console.log(res.query);
    res.send('getForm SUCCESS !');
})

app.post('/postForm', (req,res)=>{
    console.log( req.body );
    res.render('form_getPost', 
    { data : req.body, title : 'getForm Data'});   //key-value로 전송
})

app.listen( port, ()=>{
    console.log( port + ' is connected');
})