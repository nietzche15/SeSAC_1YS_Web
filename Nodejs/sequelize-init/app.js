const express = require('express');
const app = express();
const port = 3030;

app.set( 'view engine', 'ejs' );

app.use( '/static', express.static( __dirname + '/static' ));
app.use( express.urlencoded({ extended : false }));
app.use( express.json() );

const router_u = require('./routes/index_u'); 
app.use('/signIn', router_u );

const router_v = require("./routes/index_v");
app.use('/visitor', router_v );

const router_f = require("./routes/index_f");
app.use('/foods', router_f );


app.get('*', ( req, res )=>{
    res.send( '주소가 존재하지 않습니다. 다시 확인해주세요.' ); 
})

app.listen(port, ()=>{
    console.log( port, ' is connected');
})
 
 
