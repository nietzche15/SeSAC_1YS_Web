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

app.use( express.static('static));
*/


app.get('/', ( req, res)=>{
    res.send('Hello Express!');
})

// app.get('/test', ( req, res)=>{
//     res.send('Welcome to test page');
// })

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})
//__dirname = C:/ ~ /221122

app.get('/ejs', ( req, res)=>{
    res.render( 'index', {
        title : "This is index page",
        data : ['a','b','c']
    });
})
//기본 dir view폴더이기때문에 경로설정 추가로 필요X, 확장자 필요x
// render의 두번째 인자는 객체 형태(dictionary; key-value)로 넣음 (optional)



app.listen( port, ()=>{
    console.log('Server port : ', port);
})