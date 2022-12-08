const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.use( cookieParser());

var date = new Date();
var expireDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
console.log(expireDate);

const option = {
    httpOnly : true,
    expires : expireDate ,
}

app.get('/', (req,res)=>{
    //req.cookies.POPUP 의 값은 1이거나 아님
    if(req.cookies.POPUP ==1 ) {res.render('cookieEx', { popup : 'none' });}
    else { res.render( 'cookieEx', { popup : 'show' });}    
})

app.post('/modal',(req,res)=>{
    // 쿠키 생성
    res.cookie('POPUP','1', option);
    res.send( true );
})


app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})