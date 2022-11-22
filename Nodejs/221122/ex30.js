const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs'); 

app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static('static'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/form", (req,res)=>{
    res.render("ex30");
})
app.get("/getForm", (req,res)=>{
    console.log(req.query);
    res.send('get 요청 성공!');
})

app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.render('ex31', { data : req.body });
})
app.post("/postForm", (req,res)=>{
    console.log(req.body);
    res.send('post 요청 성공!');
})

app.listen( port, ()=>{
    console.log('Server port : ', port);
})
