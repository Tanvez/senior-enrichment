const Sequelize = require('sequelize')
const db = require('../index.js');

module.exports = db.define('campus', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true //checks for uniqueness?
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    description: {
        type: Sequelize.STRING
    }
})