const Foods = ( Sequelize, DataTypes )=>{
    return Sequelize.define(
        'foods', 
        {
            name : { 
                type : DataTypes.STRING(10),
                allowNull : false, 
                primaryKey : true,
            },
            quantity : { 
                type : DataTypes.INTEGER,
                allowNull : false
            },
            expire : { 
                type : DataTypes.DATE,
                allowNull : false
            }
        },
        {
            tableName : 'foods',
            freezeTableName : true,
            timestamps : false 
        }
    );
}

module.exports = Foods;