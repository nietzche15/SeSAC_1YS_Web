const express = require('express');
const app = express();
const port = 3030;

app.set('view engine','ejs');
app.use( express.urlencoded({extended:true}));
app.use(express.json());

app.use('/views', express.static(__dirname + '/views'));
app.use( express.static('static'));


app.get("/", ( req, res )=>{
    res.render('app_axios');
})

app.get("/form", (req,res)=>{
    console.log(req.query);
    res.send( );
})


app.post("/form", (req,res)=>{
    console.log(req.body);
   
    if( req.body.id == 'sesac'){
        res.send( '<p style="color:red;">"id를 잘못 입력했습니다."</p>');
    } else { 
        res.send( '<p style="color:blue;">"로그인 성공"</p>');}  
})

app.listen( port, ()=>{
    console.log( port + ' is connected');

})