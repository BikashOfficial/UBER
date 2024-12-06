import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config();
function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((error) => {
            console.error('Error connecting to DB', error);
        });
}

export default connectToDb;
