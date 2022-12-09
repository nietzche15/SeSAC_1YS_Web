const { User } = require('../model');

exports.sessionMain = ( req, res )=>{
    if(req.session.user) res.render('sessionMain', {isLogin : true});
    else{ res.render('sessionMain', {isLogin : false }); }
}

exports.sessionLogin = (req,res)=>{
    res.render('sessionLogin');
}

exports.sessionCreate = async (req,res)=>{
    let result = await User.findOne({
        where : { id : req.body.id }
    });

    if( result.pw == req.body.pw ){
        req.session.user = req.body.id;
        res.send('SUCCESS');
    }else{ res.send('FAIL'); }
}

exports.logOut = (req,res)=>{
    
}