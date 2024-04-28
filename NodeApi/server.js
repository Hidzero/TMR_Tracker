import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

import { config } from 'dotenv';
const port = process.env.PORT

app.use(express.json());

import connectDB from './database.js';
connectDB();

import userRoutes from './src/routes/userRoutes.js';
app.use('/user', userRoutes);

import carRoutes from './src/routes/carRoutes.js';
app.use('/car', carRoutes);

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/user`);
})

