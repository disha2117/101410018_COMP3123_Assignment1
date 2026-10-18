COMP3123 Assignment 1 – Express MongoDB REST API

Student ID: 101410018
Course: COMP3123 – Full Stack Development

Project Description

This project is a REST API developed using Node.js, Express.js, and MongoDB. It provides user registration and login functionality along with employee management operations.

The project uses JWT authentication to protect employee API endpoints.

Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* Postman
* GitHub

Project Features

* User registration
* User login
* Password hashing
* JWT authentication
* Create employee
* Get all employees
* Get employee by ID
* Update employee
* Delete employee
* Error handling

API Endpoints

User API

Method	Endpoint	Description
POST	/api/v1/user/signup	Register a user
POST	/api/v1/user/login	Login and receive JWT

Employee API

Method	Endpoint	Description
POST	/api/v1/emp/employees	Create employee
GET	/api/v1/emp/employees	Get all employees
GET	/api/v1/emp/employees/:id	Get employee by ID
PUT	/api/v1/emp/employees/:id	Update employee
DELETE	/api/v1/emp/employees/:id	Delete employee

Employee endpoints require JWT authentication.

Installation and Setup

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:
    npm install
4. Create a .env file and configure the required MongoDB connection and JWT environment variables.
5. Start the application:
    node app.js
6. Access the API at:
    http://localhost:3000

API Testing

Postman was used to test the API endpoints.

Testing included user registration, login, employee creation, retrieving employees, updating employees, deleting employees, and handling error responses.

GitHub Repository

https://github.com/disha2117/101410018_COMP3123_Assignment1

Conclusion

This assignment helped me understand how to develop REST APIs using Express.js and MongoDB, implement user authentication, and test API endpoints using Postman.
