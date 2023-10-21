const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {db} = require("./models/index")
const students = require("./routes/studentRouter");
const notFoundMiddleWare = require("./middleware/notFound");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/app/api/students", students);

app.use(notFoundMiddleWare);

const port = 8080;

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