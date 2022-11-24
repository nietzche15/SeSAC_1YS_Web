const express = require('express');
const app = express();
const port = 3030;

app.set('view engine','ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.json());

app.get('/', (req,res)=>{
    res.render('ex32');
})

app.get('/form', (req,res)=>{
    console.log(req.query);
    res.send(
        req.query.name +'님의 성별은 ' + 
        req.query.gender +'이며 \n'+
        "생일은 " + req.query.birth +
        ", 취미는 " + req.query.interest + '입니다.');
})

app.listen( port, ()=>{
    console.log( port + ' is connected');
})