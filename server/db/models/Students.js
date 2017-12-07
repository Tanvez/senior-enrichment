const Sequelize = require('sequelize')
const db = require('../index.js');

module.exports = db.define('students', {
    firstName: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    gpa:{
        type: Sequelize.FLOAT,
        allowNull: false,
        validate:{
                max:4.0
                }
        },
    fullName:{
        type:Sequelize.VIRTUAL,
        get:function(){
            return (this.getDataValue('firstName') + ' ' + this.getDataValue('lastName'))
        }
    }
    }
);

