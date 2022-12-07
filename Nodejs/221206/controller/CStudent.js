const { Student } = require('../model');

exports.studentInfo = async (req,res)=>{
    let result = await Student.findAll();
    res.render('finalExam', { data : result });
}

exports.enterInfo = async (req,res)=>{
    let data = {
        id : req.body.id,
        name : req.body.name,
        grade : req.body.grade,
        major : req.body.major,
        birth : req.body.birth
    }

    let result = await Student.create(data);
    console.log(result);
    res.send( result );
}