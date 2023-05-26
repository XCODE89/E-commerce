const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user",
    {
        id : {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        country : {
            type : DataTypes.STRING,
            allowNull : false,
            defaultValue : "Not specified"
        },
        city : {
            type : DataTypes.STRING,
            allowNull : false,
            defaultValue : "Not specified"
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        nickname : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        paranoid: true
    }
    )
    
}