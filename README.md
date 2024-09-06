# Kristalball task Backend

Express Setup:

Create an Express application with npm init and \
install necessary packages (express, mongoose, bcrypt, jsonwebtoken, cors, body-parser).

API Routes:\
Signup Route:
POST /users/signup: Receive user registration details, hash the password with bcrypt, and save the user to MongoDB.

Login Route:
POST /users/login: Validate user credentials, generate a JWT with jsonwebtoken, and return it to the client.

Profile Route:
GET /users/users: Fetch user details from MongoDB using the JWT for authentication.\
PUT /users/:userId: Update user details in MongoDB. Ensure the user is authenticated using the JWT.

Middleware:\
Auth Middleware:
Create middleware to verify JWT and protect routes that require authentication.

User Model (Mongoose Schema):
Define a schema with fields for username, hashed password, and additional profile data (age, DOB, contact).

Password Hashing:
Use bcrypt to hash passwords before saving them to MongoDB and to compare passwords during login.

JWT Authentication:
Use jsonwebtoken to create and verify tokens. Store the token in the browser's localStorage on the client side.

Database Interaction:
Use mongoose to interact with MongoDB, including CRUD operations for user data.\
This structure ensures secure authentication and allows users to manage their profiles effectively.

BackEnd Server link : https://kristalball-task-backend.onrender.com \
API documentation : https://documenter.getpostman.com/view/32014275/2sAXjQ3qZz

This project is open scorce, 🚀 Give a Star ⭐️ & Fork to this project ... Happy coding! 🤩