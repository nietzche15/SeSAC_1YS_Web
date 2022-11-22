const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs'); 
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static('static'));

app.use(express.urlencoded({extended:true}));
// 여러 form type 중 x-www-urlencoded 데이터 해석
app.use(express.json());
//json 형태(dictionary 형태와 유사)로 parsing


app.get("/form", (req,res)=>{
    res.render("form");
})
app.get("/getForm", (req,res)=>{
    //action할 주소 생성
})

app.listen( port, ()=>{
    console.log('Server port : ', port);
})