const Student = ( Sequelize, DataTypes )=>{
    return Sequelize.define(
        'student',
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : {
                type : DataTypes.STRING(10),
                allowNull : false
            },
            grade : {
                type : DataTypes.INTEGER,
                allowNull : false

            },
            major : {
                type : DataTypes.STRING(20),
                allowNull : false
            },
            birth : {
                type : DataTypes.DATE
            }
        },
        {
            tableName : 'student',
            freezeTableName : true,
            timestamps : false
        }
    );
}

module.exports = Student;