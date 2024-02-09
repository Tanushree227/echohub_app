import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("MongoDB is connected...");
    }
).catch((err) => console.error(err));

const app = express();

app.listen(3000, () => {
    console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), "Server is running on port 3000");
});