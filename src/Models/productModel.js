import mongoose, { Schema } from "mongoose";

// Define the schema for the product collection
const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        description:{
            type:String,
        },
        stockQuantity:{
            type:Number,
            required:true
        }

    },
    {timestamps:true}
);
const Product = mongoose.model("product",productSchema);
export default Product;