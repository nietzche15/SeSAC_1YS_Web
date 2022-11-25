const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.json());

app.use( '/views', express.static(__dirname+'views'));
app.use( express.static('static'));

app.get('/', (req,res)=>{
    res.render('app_static_G');    
})

app.get('/form',(req,res)=>{
    console.log(res.query);
    res.send('getForm success');
})

app.post('/form', (req,res)=>{
    res.render('app_static_P');    
})
app.post('/form',(req,res)=>{
    console.log(req.body);
    res.end('postForm success')
})

app.listen( port, ()=>{
    console.log( port + ' is connected');
})