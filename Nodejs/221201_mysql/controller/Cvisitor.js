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
    });
}

exports.delete = (req, res)=>{
    Visitor.delete_visitor(req.body.id , ()=>{
        //mysql에서 req.body.id에 해당하는 데이터 삭제
        //res.send로 서버 응답 > 삭제하고 따로 보낼 data는 없고 잘 완료했다는 의미로 true 보냄
        res.send(true);
    })
}

exports.get_visitor_by_id = (req,res)=>{
    //req.query.id 에 해당하는 data 조회
    //서버 응답 : 조회한 data
    Visitor.get_visitor_by_id_model(req.query.id, (rows)=>{
        res.send(rows);
    })
}

exports.update_visitor = (req,res)=>{
    //req.body data mysql에 update
    //서버 응답 : 
    Visitor.update_visitor( req.body, ()=>{
        //console 보니 result에서 사용할 정보는 없어서 그대로 send
        res.send(true);
    })
}