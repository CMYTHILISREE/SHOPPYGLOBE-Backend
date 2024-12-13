import express from 'express';
import { addToCart,updateCart,removeFromCart } from "../Controllers/cartController.js";
import verifyAccessToken from "../Middlewares/authMiddleware.js";


// Create a router instance
const cartRouter = express.Router();

// Define the routes for cart and map them to their corresponding controller functions
cartRouter.post('/cart', verifyAccessToken,  addToCart);
cartRouter.put('/cart/:id', verifyAccessToken, updateCart);
cartRouter.delete('/cart/:id', verifyAccessToken, removeFromCart);

export default cartRouter;