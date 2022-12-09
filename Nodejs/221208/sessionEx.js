const express = require('express');
const session = require('express-session');
// const router = require('./routes/index');
const app = express();
const port = 8000;

app.set( 'view engine', 'ejs' );

app.use( '/static', express.static('img') );
app.use( express.urlencoded( {extended:true} ));
app.use( express.json() );
// app.use( '/', router );


app.use(session({
    secret : '1234', 
    resave : false, 
    saveUninitialized : true, 
}))

app.get('/', (req,res)=>{
    if(req.session.user) res.render('sessionMain', {isLogin : true, sessionId : req.session.user });
    else{ res.render('sessionMain', {isLogin : false, sessionId : req.session.user }); }
})

const user = { id : 'sesac', pw : '1234'};

app.get('/login', (req,res)=>{
    res.render('sessionLogin');
})

app.post('/login', (req,res)=>{
    console.log( 'logIn req.session :', req.session );
    console.log( 'req.body : ', req.body );

    if(req.body.id == user.id && req.body.pw == user.pw ){
        req.session.user = req.body.id;
        // res.redirect('localhost:8000/');
        res.send('SUCCESS');

    }else{ res.send('FAIL'); }
})

app.post('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        console.log( 'logOut req.session :', req.session );
        if(err) throw err;

        res.send('SUCCESS');
    })
})

app.get('*', ( req, res )=>{
    res.send( '주소가 존재하지 않습니다. 다시 확인해주세요.' ); 
})

app.listen( port, ()=>{
    console.log( 'CONNECTED TO ', port );
})