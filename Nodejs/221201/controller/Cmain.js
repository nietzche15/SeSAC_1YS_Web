exports.main = ( req, res )=>{
    res.render('index');
}

exports.test = ( req, res )=>{
    res.send('Hello test');
}

exports.post = ( req, res )=>{
    res.send('Hello post');
}

//index.js에서 사용하는 함수는 Cmain.js에 저장되어있어야함