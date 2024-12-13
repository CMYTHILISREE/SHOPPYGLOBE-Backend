import bcrypt from "bcrypt";

export async function hashPassword(next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next(); // Proceed to the next middleware
    } catch (error) {
        next(error); // Pass the error to Mongoose error handler
    }
}

export async function comparePassword(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        console.error("Error comparing passwords:", error.message);
        throw error; // Re-throw the error to handle it elsewhere
    }
}






