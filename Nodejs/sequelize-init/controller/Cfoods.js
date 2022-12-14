const { Foods } = require("../model");

exports.foodlist = async (req,res)=>{
    let result = await Foods.findAll({
        order : [["expire", "ASC"]]
    });

    res.render( "foodlist", {data : result});
}

exports.addFood = async (req,res)=>{
    let data = {
        name : req.body.name,
        quantity : req.body.quantity,
        expire : req.body.expire
    }

    console.log('data : ', data);

    let result = await Foods.create(data);

    console.log(' addFood result : ', result);

    res.send(result);
}