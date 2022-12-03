const User = require('../model/User');


exports.sign = (req, res)=>{
    res.render('sign');
}
exports.idCheck = (req,res)=>{
    User.idCheck_model( req.body.id, (result)=>{
        console.log('result : ', result );
        res.send(result);
    });    
}

exports.signUp = (req, res)=>{
    User.signUp_model( req.body, (result)=>{
        console.log('result : ', result);
        res.send(true);
    })
}

exports.signIn = (req, res)=>{
    User.signIn_model( req.body, (result)=>{
        res.send(result[0]);
    })
}

exports.deleteInfo = (req,res)=>{
    User.deleteInfo_model( req.body.id, (result)=>{
        res.send(true);
    })
}