const express = require('express');
const app = express();
const port = 3030;

app.set('view engind', 'ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.jason());

app.use( '/views', express.static(__dirname+'views'));
app.use( express.static('static'));

app.get('/', (req,res)=>{
    res.render('app_dynamic');    
})

app.listen( port, ()=>{
    console.log( port + ' is connected');
})