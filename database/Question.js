const Sequelize = require('sequelize')
const conn = require('./database')

const Question = conn.define('question', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    desciption: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force:false}).then(() => {
    console.log('Table created')
})

module.exports = Question