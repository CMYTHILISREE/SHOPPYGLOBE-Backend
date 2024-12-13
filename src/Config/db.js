import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MongoDB_URI = process.env.mongoDB_URI || "mongodb://localhost:27017/shoppyglobe";

const dataBase = async () => {
    try {  
        await mongoose.connect(MongoDB_URI); 
        console.log("MongoDB Connected at:", MongoDB_URI);
    }
    catch(error){
        console.error("Mongoose connection error:", error.message);
        process.exit(1);
    }
};


export default dataBase;