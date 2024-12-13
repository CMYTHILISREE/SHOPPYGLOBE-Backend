import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


// Middleware to verify the access token
const verifyAccessToken = async (req, res, next) => {
    // Retrieve the authorization header from the request
    const authHeader = req.headers['authorization'];

    // Check if the authorization header is missing or malformed (should start with 'Bearer ')
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "Access Denied! Missing or malformed token.",
            status: 403,
            success: false,
        });
    }
     // Extract the token from the Authorization header (after 'Bearer ')
    const token = authHeader.split(" ")[1];

    try {
        // Verify the token using the JWT secret key from environment variables
        const decoded = jwt.verify(token, process.env.Jwt_secret_key);

        // If the decoded token does not contain a userId, it is considered invalid
        if (!decoded.userId) {
            return res.status(403).json({
                message: "Invalid Token. User ID missing.",
                status: 403,
                success: false,
            });
        }

        req.userId = decoded.userId;
        next(); 
    } catch (error) {
        console.log("Token verification error:", error.message);
        return res.status(500).json({
            message: "Internal server error. Please try again later.",
            status: 500,
            success: false,
            error: error.message,
        });
    }
};


export default verifyAccessToken;

