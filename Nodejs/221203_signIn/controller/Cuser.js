const User = require('../model/User');


exports.sign = (req, res)=>{
    res.render('sign');
}

exports.signIn = (req, res)=>{
    User.signIn_model( req.body.id, (result)=>{
        res.send(result);
    })
}

exports.idCheck = (req,res)=>{
    User.idCheck_model( req.query.id, (result)=>{
        console.log('CidCheck result : ', result );
        res.send(result);
    });    
}

exports.signUp = (req, res)=>{
    User.signUp_model( req.body, (result)=>{
        console.log('CsignUp result : ', result);
        res.send(true);
    })
}

exports.checkInfo = (req,res)=>{
    User.checkInfo_model( req.query.id, (result)=>{
        res.send(result);
    })
}

exports.deleteInfo = (req,res)=>{
    User.deleteInfo_model( req.body.id, ()=>{
        res.send(true); 
    })
}

exports.updateInfo = (req,res)=>{
    User.updateInfo_model( req.body, ()=>{
        console.log( 'Creq.body : ', req.body );
        res.send(true);
    })
}