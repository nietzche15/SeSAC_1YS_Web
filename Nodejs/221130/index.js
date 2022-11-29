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
