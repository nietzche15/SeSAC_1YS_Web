const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs'); 

app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static('static'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/form", (req,res)=>{
    res.render("ex31");
})
// app.get("/getForm", (req,res)=>{
//     console.log(req.query);
//     res.send('get 요청 성공!');
// })

app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.render('result2', { data : req.body });
})
app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.send('post 요청 성공!');
})
//같은 url로 같은 method하는 경우 먼저 기재된 것만 실행

app.listen( port, ()=>{
    console.log('Server port : ', port);
})
