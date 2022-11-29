/*
MySQL과 Nodejs 연결시키기(2)

webpage에서 sql문 결과 확인 > client도 확인 가능
*/


const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
    host : 'localhost', 
    user : 'user',
    password : '#hibiscuS15',
    database : 'hibiscus',
});

app.set('view engine','ejs');
// app.use('/views', express.static('views'));
// app.use( express.urlencoded({extended:true}));
// app.use( express.json());

app.get('/',(req,res)=>{
    cnn.query('select * from user', ( err, result )=>{ 
        if (err) throw err;
    
        console.log(result); 
        res.render('index', { rows : result }); // query에서 받은 result 추가  
    })
});

app.listen(port, ()=>{
    console.log( port, ' is connected');
})
