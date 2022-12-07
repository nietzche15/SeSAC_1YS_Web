const { Student } = require('../model');

exports.studentInfo = async (req,res)=>{
    let result = await Student.findAll();
    res.render('finalExam', { data : result });
}

exports.enterInfo = async (req,res)=>{
    let result = await Student.create()
}