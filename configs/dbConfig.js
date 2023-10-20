require("dotenv").config();

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dialect: "mysql",
    pool: {
        max: 100,
        min: 0,
    }
}

module.exports = dbConfig;