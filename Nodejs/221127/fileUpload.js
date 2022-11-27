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
            console.log( 'filename : ', req.body );

            const ext = path.extname( file.originalname );
            const filename = Math.random() + ext;

            done( null, filename );
        }
    })
})


app.use( '/views', express.static('/views'));
app.use( '/uploads', express.static('/uploads'));

app.get('/', (req,res)=>{
    res.render('fileUpload');
})



app.listen( port, ()=>{
    console.log( port + 'is connected ! ');
})
