const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("course",
    {
        id : {
            type : DataTypes.UUID,
            primaryKey : true
        },
        titulo : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        imagen : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        precio : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        oferta : {
            type : DataTypes.INTEGER
        },
        rating : {
            type : DataTypes.INTEGER
        }
    })
}