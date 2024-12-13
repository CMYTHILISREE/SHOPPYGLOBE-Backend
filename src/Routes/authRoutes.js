import express from 'express';
import { register,login } from '../Controllers/userController.js';

// Create a router instance
const authRouter = express.Router();

// Define the routes for User and map them to their corresponding controller functions
authRouter.post('/register', register);
authRouter.post('/login', login);

export default authRouter;