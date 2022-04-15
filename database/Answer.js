const Sequelize = require('sequelize')
const conn = require('./database')

const Answer = conn.define('Answer', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Answer.sync({force: false})

module.exports = Answer