import express from 'express';
import {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
} from "../Controllers/productController.js";

// Create a router instance
const productRouter = express.Router();

// Define the routes for products and map them to their corresponding controller functions
productRouter.get('/products/', getAllProducts);
productRouter.get('/products/:id', getSingleProduct);
productRouter.post('/products', addProduct);
productRouter.put('/products/:id', updateProduct);
productRouter.delete('/products/:id', deleteProduct);

export default productRouter;