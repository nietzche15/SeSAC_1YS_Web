const { doesNotMatch } = require('assert');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.json());

app.use( '/uploads', express.static('uploads'));


const upload = multer({
    storage : multer.diskStorage({
        destination(req,file,done){
            done( null, 'uploads/'); 
        },
        filename(req,file,done){
            console.log('filename : ', req.body );

            const ext = path.extname( file.originalname );
            const filename = req.body.id + ext;
            done( null, filename );
        }
    })
})

app.get('/file', (req,res)=>{
    res.render('ex35');
})

app.post('/upload', upload.single('userfile'), (req,res)=>{
    console.log( req.file );
    console.log( req.body );
    res.render( 'result', { data1 : req.body, data2 : req.file });
})

app.listen( port, ()=>{
    console.log( port + ' is connected');

})