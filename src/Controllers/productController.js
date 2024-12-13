import mongoose from "mongoose";
import Product from "../Models/productModel.js";

//Fetch all the products
const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100); 
        const startIndex = (page - 1) * limit;

        const totalProducts = await Product.countDocuments();
        if (totalProducts === 0) {
            return res.status(404).json({
                message: "No products found",
                status: 404,
                success: false,
            });
        }

        const products = await Product.find({}, 'productName price stockQty') 
            .skip(startIndex)
            .limit(limit);

        res.status(200).json({
            totalProducts,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            products,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

//fetch only particular id product
const getSingleProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "No such product exists!",
                status: 404,
                success: false,
            });
        }

        res.status(200).json({
            product,
            status: 200,
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

//create the product
const addProduct = async (req, res) => {
    const { name, price, description, stockQuantity } = req.body;

    if (!name || !price || !stockQuantity) {
        return res.status(400).json({
            message: "Please provide productName, price, and stockQty (description optional).",
            status: 400,
            success: false,
        });
    }

    try {
        const existingProduct = await Product.findOne({ productName: name });
        if (existingProduct) {
            return res.status(400).json({
                message: "Product with this name already exists.",
                status: 400,
                success: false,
            });
        }

        const newProduct = await Product.create({
            name: name,
            price:price,
            description: description || "",
            stockQuantity: stockQuantity,
        });

        res.status(201).json({
            message: "Product added successfully!",
            status: 201,
            success: true,
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

//update the product
const updateProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "No Product Found with this ID!",
                status: 404,
                success: false,
            });
        }

        res.status(200).json({
            message: "Product updated successfully!",
            status: 200,
            success: true,
            product: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

//delete the product
const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found!",
                status: 404,
                success: false,
            });
        }

        res.status(200).json({
            message: "Product deleted successfully!",
            status: 200,
            success: true,
            product: deletedProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            status: 500,
            success: false,
        });
    }
};

export {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};