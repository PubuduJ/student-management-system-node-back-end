const express = require("express");
const {db} = require("./models/index")
const cors = require("cors");
const students = require("./routes/studentRouter");
const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/app/api/students", students);

const port = 8081;

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Database connection successful");
        // start the Express server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}....`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

startServer().then(() => {});