const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js')

connectToDb();
dotenv.config();

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.use("/users", userRoutes)

module.exports = app;