const Sequelize = required('sequelize')

const connection =  new Sequelize('teste','guikoller','1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection