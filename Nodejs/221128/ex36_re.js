const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3030;

app.set( 'view engine', 'ejs');
app.use( '/uploads', express.static( 'uploads' ));

app.use( express.urlencoded({ extended:true }));
app.use( express.json() );

const upload = multer({
    storage : multer.diskStorage({
        destination( req, file, done ){
            done( null, 'uploads/');
        },
        filename( req, file, done ){
            const ext = path.extname( file.originalname );
            done( null, req.body.id + ext ); 
        }
    })
});


app.get('/dynamic', (req,res)=>{
    res.render('ex36_re');
})

app.post('/dynamic', upload.single('userfile'), (req,res)=>{
    console.log( 'req.file: ', req.file );
    console.log( 'req.body: ', req.body );
    res.send({ path : req.file.path });
})

app.listen( port, ()=>{
    console.log( port + ' is connected !');
})


