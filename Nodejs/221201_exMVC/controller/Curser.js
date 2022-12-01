const User = require('../model/User');


exports.main = ( req, res )=>{
    res.render('login');
}

exports.postForm = ( req, res )=>{

    let logincheck = User.loginCheck();
    let usersArr = User.userList().split('\n');

    console.log(req.body);
    console.log( usersArr[0].split('//') );

    let login_flag = false;
    let name = "";

    for( let i=0; i < usersArr.length; i++){
        let thisUser = usersArr[i].split('//');
        if( req.body.id == thisUser[0] && req.body.pw == thisUser[1]){
            login_flag=true; 
            name= thisUser[2];
            break;
        }
    }

    if(login_flag) res.send(`<p style="color:blue;">'${name}님 환영합니다.'</p>`);
   
    // if( req.body.id == logincheck ){
    //     res.send( '<p style="color:red;">"id를 잘못 입력했습니다."</p>');
    // } else { 
    //     res.send( '<p style="color:blue;">"로그인 성공"</p>');}  

    
        // if( req.body.id == usersArr[0].split('//')[0] && req.body.pw == usersArr[0].split('//')[1] ){
        //     res.send( '<p style="color:blue;">"' + usersArr[0].split('//')[2] + '님 환영합니다."</p>');
        // }else if( req.body.id == usersArr[1].split('//')[0] && req.body.pw == usersArr[1].split('//')[1] ){
        //     res.send( '<p style="color:blue;">"' + usersArr[1].split('//')[2] + '님 환영합니다."</p>');
        // }else if( req.body.id == usersArr[2].split('//')[0] && req.body.pw == usersArr[2].split('//')[1] ){
        //     res.send( '<p style="color:blue;">"' + usersArr[2].split('//')[2] + '님 환영합니다."</p>');
        // }else{res.send( '<p style="color:red;">"아이디 또는 비밀번호를 잘못 입력했습니다."</p>');}



        
}





//index.js에서 사용하는 함수는 Cmain.js에 저장되어있어야함