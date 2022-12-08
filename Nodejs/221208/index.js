const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;

app.use(session({
    secret : '1234', // 입력한 임의의 문자열을 사용해 암호화 한다
    resave : false, // true : 모든 요청마다 변경사항이 없는 경우에도 session 다시 저장
    saveUninitialized : true, //접속하는 순간에 초기화되지 않은 session을 저장
    // cookie : { //session id 쿠키에 대한 옵션
    //     httpOnly :true,
    //     maxAge : ,
    // },
    // secure : //true : 보안서버에서만 작동
}))

app.get('/', (req,res)=>{
    if(req.session.user) res.render('index', {isLogin : true});
    else{ res.render('index', {isLogin : false }); }

    res.send('SESSION');
})

const user = { id : 'a', pw : '1234'};

app.post('/login', (req,res)=>{
    //req.session = { };
    //client 가 가진 고유의 정보(id)를 받기 위해 req를 쓴다

    if(req.body.id == user.id && req.body.pw == user.pw ){
        req.session.user = req.body.id;
        res.send('로그인 성공');
    }else{ res.send('로그인 실패'); }

    res.send('세션 생성 성공');
})

app.post('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;

        res.send('로그아웃 성공');
    })

    res.send('세션 생성 성공');
})

app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})