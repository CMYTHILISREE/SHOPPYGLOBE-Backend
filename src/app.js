// Import necessary modules and configurations
import express from "express";
import dataBase from "./Config/db.js";
import cartRouter from "./Routes/cartRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import authRouter from "./Routes/authRoutes.js";
import dotenv from "dotenv";
import logger from "./Middlewares/logger.js"

// Initialize dotenv to use environment variables
dotenv.config();


// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for logging requests
app.use(logger);

dataBase();


// Route definitions for various APIs
app.use('/api', authRouter);
app.use('/api', productRouter);
app.use('/api', cartRouter);


const PORT = process.env.PORT || 5100;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;