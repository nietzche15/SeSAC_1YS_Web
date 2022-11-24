const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.use( express.urlencoded({extended:true}));
app.use(express.json());
//------------------------------default code set


app.use('/views', express.static(__dirname + '/views'));
app.use( express.static('static'));


app.get("/", ( req, res )=>{
    res.render('index');
})

app.get("/form", (req,res)=>{
    console.log(req.query);
    res.send("get - 이름은 : " + req.query.name );
})
app.post("/form", (req,res)=>{
    console.log(req.body);
    res.send("post - 이름은 : " + req.body.name );
})

app.listen( port, ()=>{
    console.log( port + ' is connected');

})