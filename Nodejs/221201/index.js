const express =require('express');
const app = express();
const port = 8000;

app.set( 'view engine', 'ejs' );

app.use( '/static', express.static( __dirname + '/static' ));
app.use( express.urlencoded({ extended : false }));
app.use( express.json() );

const router = require('./routes'); // >> routes/index.js에서 exports한 router 받음
/* 
상대주소 routes 내 index.js 파일 middleware router로 사용
경로만 지정하면 > 폴더 내 index.js 자동으로 찾음, 다른 이름의 파일 연결하고 싶다면 파일명도 입력해야함
const router = require('./routes/test.js'); 
*/

app.use('/', router);


app.get('*', ( req, res )=>{
    res.render( 'error' ); // * : 모든 주소
})

app.get('*', ( req, res )=>{
    res.send( '주소가 존재하지 않습니다. 다시 확인해주세요.' ); // * : 모든 주소, 모든 router set 후 맨 밑에 위치해야함
})

app.listen(port, ()=>{
    console.log( port, ' is connected');
})
