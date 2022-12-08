const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;

app.set('view engine','ejs');

app.use( express.urlencoded({extended:true}));
app.use( express.json() );


app.use(session({
    secret : '1234', 
    resave : false, 
    saveUninitialized : true, 
}))

app.get('/', (req,res)=>{
    // if(req.session.user) res.render('sessionEx', {isLogin : true});
    // else{ res.render('sessionEx', {isLogin : false }); }
    res.render('sessionMain');
})

const user = { id : 'sesac', pw : '1234'};

app.get('/login', (req,res)=>{
    if(req.query.id==user.id){ res.render('sessionLogin');}
    else{res.render('sessionLogin');}
})

app.post('/login', (req,res)=>{
    console.log( 'req.session :', req.session );

    if(req.body.id == user.id && req.body.pw == user.pw ){
        req.session.user = req.body.id;
        res.send('SUCCESS');
    }else{ res.send('FAIL'); }
})

app.post('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        console.log( 'req.session :', req.session );
        if(err) throw err;
        res.send('logOut');
    })
})

app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})