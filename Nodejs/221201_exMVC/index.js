const express =require('express');
const app = express();
const port = 8000;

app.set( 'view engine', 'ejs' );

app.use( '/static', express.static( __dirname + '/static' ));
app.use( express.urlencoded({ extended : false }));
app.use( express.json() );

const router = require('./routes'); 

app.use('/', router);


app.get('*', ( req, res )=>{
    res.send( '주소가 존재하지 않습니다. 다시 확인해주세요.' ); // * : 모든 주소, 모든 router set 후 맨 밑에 위치해야함
})

app.listen(port, ()=>{
    console.log( port, ' is connected');
})
