const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.use(cookieParser());

app.get('/',(req,res)=>{
    // if(req.cookies.NM_POPUP) res.render('',{popup: 'none'});
    // else{ res.render('', { popup : 'display'});}
    res.send('Hello World !');
})

const option = {
    httpOnly : true, //브라우저 상에서만 접근 가능, javascript에서 cookie에 접근, 수정하는 것 제한(document.cookies~)
    maxAge : 30000, //만들어진 순간부터 특정 시간(ms) 이후에 만료된다 ex30000ms > 30s 후 만료
    //expires : '2022-12-09T09:00:00', //GMT 시간으로 만료일 지정 2022-12-09T09:00:00
    //path : '/a', //localhost:8000에는 쿠키 없고 localhost:8000/a/~ 에만 쿠키 발생 dafault : '/'
    //secure : false, // true > https 보안서버에만 적용됨, default : false
    //signed : true // 암호화 여부 T/F default : false
}

app.get('/set', ( req, res )=>{
    res.cookie( 'test', '1', option );
    res.send( '쿠키 생성 성공 !' );
})

app.get('/get', ( req, res )=>{
    console.log( 'req.cookies : ', req.cookies );
    console.log( 'req.cookies.test : ', req.cookies.test );
    res.send( req.cookies );
})

app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})