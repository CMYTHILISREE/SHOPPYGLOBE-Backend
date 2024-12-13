import mongoose, { Schema } from "mongoose";

// Define the schema for the cart collection
const cartSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        items:[
            {
                productId:{
                    type:mongoose.Schema.ObjectId,
                    ref:"Product",
                    required:true,
                },
                quantity:{
                    type:Number,
                    required:true,
                }
            }
        ]
    },
    {timestamps:true}
);

const Cart = mongoose.model("cart", cartSchema);
export default Cart;