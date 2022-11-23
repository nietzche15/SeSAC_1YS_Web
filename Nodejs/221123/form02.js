const express = require('express');
const app = express();
const port = 3030;

app.set('view engine','ejs');
app.use('/views', express.static(__dirname+'/views'));

app.use( express.static('bread'));

app.use( express.urlencoded({extended:true}));
app.use(express.json());
//-------------------------------->default code set

app.get('/form', (req,res)=>{
    res.render('bread02');
})

app.get('/getForm', (req,res)=>{
    console.log(req.query);
    res.send('get 요청 성공!')

})



app.listen( port, ()=>{
    console.log( port + ' is connected');
})