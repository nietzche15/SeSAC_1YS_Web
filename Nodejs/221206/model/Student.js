const Student = ( Sequelize, DataTypes )=>{
    return Sequelize.define(
        'student',
        {
            id : {},
            name : {},
            grade : {},
            major : {},
            birth : {}
        },
        {
            tableName : 'student',
            freezeTableName : true,
            timestamps : false
        }
    );
}

module.exports = Student;