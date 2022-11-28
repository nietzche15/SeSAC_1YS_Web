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
    res.render('ex36');
})

app.post('/dynamicFile', upload.single('dynamic_userfile'), (req,res)=>{
    console.log( 'req.file : ', req.file );
    console.log( 'req.body : ', req.body );
    res.send( req.file );
})

app.listen( port, ()=>{
    console.log( port + ' is connected');
})