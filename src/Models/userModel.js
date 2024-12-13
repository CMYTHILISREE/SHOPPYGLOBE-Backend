import mongoose, { Schema } from "mongoose";
 // Middleware functions for password hashing and comparison
import { hashPassword, comparePassword } from "../Middlewares/passwordMiddleware.js";

// Define the schema for the user collection
const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true,
            lowercase:true,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            lowercase:true,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    },{timestamps:true}
);


// Pre-save middleware 
userSchema.pre("save",hashPassword);
// Instance method to compare hashed passwords during authentication
userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model("user",userSchema);
export default User;