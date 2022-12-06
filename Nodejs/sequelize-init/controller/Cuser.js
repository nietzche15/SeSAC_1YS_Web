const { User } = require('../model');


exports.sign = (req, res)=>{
    res.render('sign');
}

exports.signIn = async (req, res)=>{

    let result = await User.findOne({
        where : { id : req.body.id }
    });

    res.send(result);
    
    // User.signIn_model( req.body.id, (result)=>{
    //     res.send(result);
    // })
}

exports.idCheck = async (req,res)=>{

    let result = await User.findOne({
        where : { id : req.query.id }
    });

    console.log('CidCheck result : ', result );
    if(result===null){res.send(false);} 
    else{res.send( true );}

    // if ( result.length < 1){ res.send(false); }
    // else{ res.send(true); }

    // User.idCheck_model( req.body.id, (result)=>{
    //     console.log('CidCheck result : ', result );
    //     res.send(result);
    // });    
}

exports.signUp = async (req, res)=>{

    let data = {
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name        
    }
    let result = await User.create(data);
    console.log('CsignUp result : ', result);
    res.send(true);

    // User.signUp_model( req.body, (result)=>{
    //     console.log('CsignUp result : ', result);
    //     res.send(true);
    // })
}

exports.checkInfo = async (req,res)=>{

    let result = await User.findOne({
        where : { id : req.query.id }
    });
    res.send(result);

    // User.checkInfo_model( req.query.id, (result)=>{
    //     res.send(result);
    // })
}

exports.deleteInfo = async (req,res)=>{

    let result = await User.destroy({
        where : { id : req.body.id }
    });
    res.send(true);

    // User.deleteInfo_model( req.body.id, ()=>{
    //     res.send(true); 
    // })
}

exports.updateInfo = async (req,res)=>{
    let data = {
        pw : req.body.pw,
        name : req.body.name        
    }

    let result = await User.update(data, {
        where : { id : req.body.id }
    })

    console.log( 'update result : ', result );
    res.send(true);

    // User.updateInfo_model( req.body, ()=>{
    //     console.log( 'Creq.body : ', req.body );
    //     res.send(true);
    // })
}