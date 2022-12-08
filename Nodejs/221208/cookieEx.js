const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;



app.set('view engine','ejs');
app.use( cookieParser());

const option = {
    httpOnly : true,
    maxAge : 3600*24 ,
}

app.get('/', (req,res)=>{
    //req.cookies.POPUP 의 값은 1이거나 아님
    if(req.cookies.POPUP ==1 ) {res.render('cookieEx', { popup : 'none' });}
    else { res.render( 'cookieEx', { popup : 'show' });}    
})

app.post('/modal',(req,res)=>{

    res.cookie('POPUP','1', option);
    res.send( true );
})


app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})