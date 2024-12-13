ShoppyGlobe E-commerce Backend API
1.	 Node.js and Express.js are used to build the backend API.
2.	MongoDB is utilized to store product and cart data.
3.	API supports GET, POST, PUT, and DELETE methods for product and cart management.
4.	GET /products fetches all products from the database.
5.	GET /products/:id fetches product details by product ID.
6.	POST /cart adds products to the shopping cart.
7.	PUT /cart/:id updates the quantity of items in the cart.
8.	DELETE /cart/:id removes products from the shopping cart.
9.	JWT-based Authentication is implemented for user registration and login.
10.	POST /register allows new users to register.
11.	POST /login authenticates users and returns a JWT token.
12.	Cart-related routes are protected and require authentication via JWT.
13.	MongoDB collections store product information and cart items, with fields like name, price, description, and stock quantity.
14.	API error handling and data validation are implemented to ensure secure and smooth API operations.
15.	ThunderClient is used for testing and validating all API routes
