const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3030;

app.set('view engine','ejs');
app.use( express.urlencoded({extended:true}));
app.use( express.json());

const upload = multer({
    storage : multer.diskStorage({
        destination( req, file, done ){
            done( null, 'uploads/');
        },
        filename( req, file, done ){
            console.log( 'filename : ', req.body ); //file input 이전까지만 처리

            const ext = path.extname( file.originalname );
            const filename = Math.random() + ext;

            done( null, filename );
        }
    })
})


app.use( '/uploads', express.static('uploads'));

app.get('/', (req,res)=>{
    res.render('fileUpload');
})

app.post('/single_upload', upload.single('userfile'), (req,res)=>{
    console.log( 'req.file (sin) : ', req.file);
    console.log( 'req.body (sin) : ', req.body);
    res.render( 'postFile', { data1 : req.file.data, data2 : null });
})

app.post('/array_upload', upload.array('userfile'), (req,res)=>{
    console.log( 'req.files (arr) : ', req.files);
    console.log( 'req.body (arr) : ', req.body);
    res.render('postFile', { data1 : null, data2 : req.files });
})

app.post('/fields_upload', upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]), (req,res)=>{
    console.log( 'req.files (fld) : ', req.files);
    console.log( 'req.body (fld) : ', req.body);
    res.render('postFile', { data1 : null, data2 : req.files });
})


app.listen( port, ()=>{
    console.log( port + ' is connected ! ');
})
