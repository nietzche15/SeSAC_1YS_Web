const Test = require('../model/Test');

exports.main = ( req, res )=>{
    res.render('index');
}

exports.postForm = ( req, res )=>{

    let logincheck = Test.loginCheck();

    console.log(req.body);
   
    if( req.body.id == logincheck ){
        res.send( '<p style="color:red;">"id를 잘못 입력했습니다."</p>');
    } else { 
        res.send( '<p style="color:blue;">"로그인 성공"</p>');}  
}

//index.js에서 사용하는 함수는 Cmain.js에 저장되어있어야함