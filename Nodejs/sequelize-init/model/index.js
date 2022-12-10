const Sequelize = require('sequelize');
const config = require('../config/config.json')["development"];
//js파일 아니기 때문에 확장자 적어줘야
//config에는 config.json에서 적어준 개발,배포환경 key-value 값 들어와있음

// config = {
//     "host" : "localhost",
//     "database": "hibiscus",
//     "username " : "user",
//     "password" : "#hibiscuS15",
//     "dialect" : "mysql"
// }

const db ={};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
//인자 4개

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')( sequelize, Sequelize );
//Visitor.js에서 정의한 함수 Visitor 받아와서 실행, return값 발생할 것
// return sequlize.define(~ type : Sequlize.INTEGER ~)

//
// db = {
//     "sequelize" : sequelize,
//     "Sequelize" : Sequelize,
//     "Visitor" : return 값
// }
//

db.User = require('./User')( sequelize, Sequelize );
db.Product = require('./Product')( sequelize, Sequelize );
db.Payment = require('./Payment')( sequelize, Sequelize );

db.User.hasMany(db.Payment, {
    foreignKey : 'user_id', //user table에서의 col name
    sourceKey : 'user_id', //
    onDelete : 'cascade'
});

db.Payment.belongsTo( db.User, {
    foreignKey : 'user_id', 
    sourceKey : 'user_id',
    onDelete : 'cascade'
});

db.Product.hasMany( db.Payment, {
    foreignKey : 'product_id', 
    sourceKey : 'product_id',
    onDelete : 'cascade'
});

db.Product.belongsTo( db.Payment, {
    foreignKey : 'product_id', 
    sourceKey : 'product_id',
    onDelete : 'cascade'
});

module.exports = db;


