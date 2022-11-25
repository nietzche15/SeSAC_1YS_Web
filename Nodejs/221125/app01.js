const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.use( express.urlenconded({extended:true}));
app.use(express.json());

app.use('/views',express.static(__dirname+'/public'));
app.use( express.static('static'));

app.get('/01', ( req,res)=>{
    res.send('Welcome to page 01');
})
//직접 데이터 입력


app.get('/02',(req,res)=>{
    res.sendFile(__dirname + '/views/app01.html');
})
//html 불러와서 열기


app.get('/03',(req,res)=>{
    res.render('app01', {
        title : 'Step 03',
        data : ['a','b','c']
    });
})
//ejs 가져와서 열기 + data(dictionary 형식으로) 직접 추가


app.listen( port, ()=>{
    console.log( port + ' is connected');
})

