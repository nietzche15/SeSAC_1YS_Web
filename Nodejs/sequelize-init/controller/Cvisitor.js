//const Visitor = require("../model/Visitor");
const { Visitor } = require('../model'); //index.js파일 불러오는 경우는 폴더까지만 접근해도 됨


exports.visitor = async( req, res ) => {

    let result = await Visitor.findAll(); 
    res.render('visitor', { data : result });


    // Visitor.findAll()
    // .then(( result )=>{
    //     console.log( ' result : ', result);
    //     console.log( ' result[0].id : ', result[0].id );
    //     //default로 dataValues로 연결됨
    //     res.render('visitor', {data:result});
    // })

    //SELECT * FROM visitor;
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }

    let result = await Visitor.create(data);
    console.log( 'register result : ', result);
    res.send(String(result.id));

    // Visitor.create(data)
    // .then((result)=>{
    //     console.log( 'register result : ', result);
    //     res.send(String(result.id));
    // })

    // INSERT INTO visitor (name, comment) values ('${info.name}', '${info.comment}'
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 

    let result = await Visitor.destroy({ 
        where : { id : req.body.id }
    });
    console.log('delete result : ', result);
    res.send(true);

    // Visitor.destroy({ 
    //     where : { id : req.body.id }
    // })
    // .then((result)=>{
    //     console.log('delete result : ', result);
    //     res.send(true);
    // })

    // DELETE FROM visitor WHERE id=${req.body.id};
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    
    let result = await Visitor.findOne({
        where : { id : req.query.id }
    });

    res.send(result);
    
    // Visitor.findOne({
    //     where : { id : req.query.id }
    // }).then((result)=>{
    //     res.send(result);
    // })

    //SELECT * FROM VISITOR WHERE id=req.query.id; 
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답
    let data = {
        name : req.body.name,
        comment : req.body.comment
    } 

    let result = await Visitor.update({ data },{
        where : { id :req.body.id }
    })

    console.log('update result : ', result);
    res.send(true);

    // Visitor.update({ data },{
    //     where : { id :req.body.id }
    // })
    // .then((result)=>{
    //     console.log('update result : ', result);
    //     res.send(true);
    // })

    // UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id=${req.body.id};
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}