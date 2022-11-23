const express = require('express');
const app = express();
const port = 8080;





app.set('view engine', 'ejs'); 
//views 폴더 안의 ejs 폴더 사용
// C:/ ~ views/@@@.ejs 
app.use('/views', express.static(__dirname + '/views'));

app.use('/static', express.static('static'));
/*
app.use('/public', express.static('static'));
 '/가상경로(임의의 이름)', express.static ( '실제 존재하는 폴더명' )
  실존 폴더를 가상의 이름으로 접근할 수 있도록 함
  >> src="/public/img/white_heart.png"

app.use( express.static('static'));
*/

app.use(express.urlencoded({extended:true}));
// 여러 form type 중 x-www-urlencoded 데이터 해석
app.use(express.json());
//json 형태(dictionary 형태와 유사)로 parsing


//01
app.get('/', ( req, res)=>{
    res.send('Hello Express!');
})

app.get('/test', ( req, res)=>{
    res.send('Welcome to test page');
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})
//__dirname = C:/ ~ /221122


//02
app.get('/ejs', ( req, res)=>{
    res.render( 'index', {
        title : "This is index page",
        data : ['a','b','c']
    });
})
//기본 dir view폴더이기때문에 경로설정 추가로 필요X, 확장자 필요x
// render의 두번째 인자는 객체 형태(dictionary; key-value)로 넣음 (optional)


//03
app.get("/form", (req,res)=>{
    res.render("form");
})
app.get("/getForm", (req,res)=>{
    console.log(req.query);
    res.send('get 요청 성공!');
})

app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.render('result', { data : req.body });
})
// result.ejs의 data가 req.body로 출력
// result.ejs에서는 data.key로 받기

app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.send('post 요청 성공!');
})

app.listen( port, ()=>{
    console.log('Server port : ', port);
})