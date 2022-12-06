const Visitor = ( Sequelize, DataTypes )=>{
    return Sequelize.define(
        'visitor', // create table visitor()
        {
            id : { // id int not null primary key auto_increment
                type : DataTypes.INTEGER,
                allowNull : false, 
                primaryKey : true,
                autoIncrement : true
            },
            name : { // name varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false
            },
            comment : { // comment mediumtext
                type : DataTypes.TEXT('medium')
            }
        },
        {
            tableName : 'visitor',
            freezeTableName : true,
            timestamps : false //default true > data 수정, 변경마다 컬럼(createdAt modifyAt)에 시간 등 정보 저장
            //collate, charset : 한글 설정 db에서 처리되고 있어 여기에서는 설정할 필요x
        }
    );
}

module.exports = Visitor;
