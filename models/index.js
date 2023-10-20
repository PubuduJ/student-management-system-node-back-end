const dbConfig = require("../configs/dbConfig");
const studentModel = require("./studentModel")

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min
        }
    }
)

const db = {
    sequelize: sequelize,
    students: studentModel(sequelize, DataTypes)
}

// force: false, Do not re-create database tables again and again when run the server again and again.
sequelize.sync({force: false}).then(() => {
    console.log("re-sync done!")
})

module.exports = {db}