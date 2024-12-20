const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");


const connectToDb = require('./db/db.js')
const userRoutes = require('./routes/user.routes.js');
const captainRoutes = require('./routes/captain.routes.js');


dotenv.config();
const app = express();
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// dotenv.config();
// app.use(cors());
// app.use(cookieParser());
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.use("/users", userRoutes)
app.use("/captains", captainRoutes)

module.exports = app;