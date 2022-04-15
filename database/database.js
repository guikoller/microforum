const Sequelize = require('sequelize')

let database = 'microforum'
let user = 'guikoller'
let pwd = '1234'

const connection =  new Sequelize(database, user, pwd, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection