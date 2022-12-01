const Test = require('../model/Test');

exports.main = ( req, res )=>{
    let hi = Test.hello(); // hi 에 Test의 hello함수에서 return되는 'hello'가 담김
    res.send(hi);
    //res.render('index');
}

exports.test = ( req, res )=>{
    res.send('Hello test');
}

exports.post = ( req, res )=>{
    res.send('Hello post');
}

//index.js에서 사용하는 함수는 Cmain.js에 저장되어있어야함