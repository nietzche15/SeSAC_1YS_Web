const Visitor = require('../model/Visitor');

exports.visitor = (req,res)=>{
    Visitor.get_visitor((result)=>{ //get_visitor는 인자로 함수를 받음 > cb
        console.log(result);
        res.render('visitor', { data : result });
    });  
}

exports.register = (req,res)=>{
    Visitor.register_visitor(req.body, (id)=>{
        console.log(id);
        res.send( String(id) );
        //id : query의 결과값 > insertId
    })
} 