import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import connectToDb from "./db/db.js";

connectToDb();

const app = express();
dotenv.config();
app.use(cors());

app.get('/', (req,res) =>{
    res.send("Hello World!")
});

export default app;