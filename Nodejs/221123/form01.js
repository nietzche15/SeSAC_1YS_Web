const express = require('express');
const app = express();
const port = 3030;

app.set('view engine','ejs');
//ejs template set
//dirname/view/~.ejs 로 연결
app.use('/views', express.static(__dirname + '/views'));
//----------------------------> default code

app.use( express.static('bread'));


app.get('/bread01', ( req,res )=>{
    console.log('Gotcha');
    res.render( 'bread01', {
        title : "bread",
        fruits : ['apple','lemon','melon','orange']
    });
})
//dirname/view/bread01.ejs render

app.listen( port, ()=>{
    console.log( port + ' is connected');
})