import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes  from './routes/auth.js';
import dotenv from 'dotenv';


    const app = express();
    app.use(express.json());
    app.use(cors());
    dotenv.config();

    app.get('/', (req, res) => {
        res.send("This is the login page")
    })

    const PORT = process.env.PORT || 5000;

    const CONNECTION_URL = process.env.MONGODB_URL;

    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
        app.use('/auth', authRoutes );
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error.message));
