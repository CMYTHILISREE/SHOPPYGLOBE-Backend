// Middleware function to log HTTP request details after the response is sent
export default function logger(req, res, next) {
    res.on('finish', () => {
         // Capture the current timestamp in ISO format
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Method: ${req.method}, URL: ${req.url}, Status: ${res.statusCode}`);
    });
       // Call the next middleware in the stack
    next();
}