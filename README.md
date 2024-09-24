# Task Manager Application

## Overview
The Task Manager Application is a web-based tool designed to help users create, manage, and organize their tasks efficiently. It features user authentication, task management capabilities, and robust error handling. The application is built using the MERN stack, ensuring a seamless user experience.

## Key Features
- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **CRUD Operations**: Users can Create, Read, Update, and Delete tasks.
- **Error Handling**: Comprehensive error management for all API endpoints.
- **API Documentation**: Detailed API documentation available via Swagger UI.

## Project Structure

```
/backend
|-- /controllers      # Business logic and request handling
|-- /models           # Database models and schema definitions
|-- /routes           # API routes and endpoint definitions
|-- /middlewares      # Custom middleware functions
|-- /config           # Configuration files (e.g., database)
|-- server.js         # Entry point for the application
|-- package.json      # Project metadata and dependencies
/README.md            # Project documentation
```

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT**: For secure user authentication.
- **Bcrypt.js**: For hashing passwords.

## Installation Instructions
To run the Task Manager Application locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB running locally or access to a MongoDB Atlas account.

### Steps to Run
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in the root directory and add the necessary configuration:
   ```
   PORT=4000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the Application**:
   ```bash
   cd backend
   npm start
   ```

## API Endpoints
### Authentication
- **POST /api/user/register**: Register a new user.
  - **Request Body**: 
    ```json
    {
      "name": "examplename",
      "username": "exampleUser",
      "password": "examplePassword"
    }
    ```
  - **Response**: Success message or error details.

- **POST /api/uer/login**: Authenticate a user and return a JWT.
  - **Request Body**: 
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword"
    }
    ```
  - **Response**: JWT token or error details.

### Task Management
- **GET /api/task/fetch**: Retrieve all tasks.
- **POST /api/task/post**: Create a new task.
  - **Request Body**: 
    ```json
    {
      "title": "New Task",
      "description": "Task description",
      "status": "pending",
    }
    ```
- **PUT /api/task/update/:id**: Update an existing task by ID.
  - **Request Body**: 
    ```json
    {
      "title": "Updated Task Title",
      "description": "Updated description",
      "status": "Updated status",
    }
    ```
- **DELETE /api/task/delete/:id**: Delete a task by ID.

## Challenges Faced
- **Error Handling**: Initially faced challenges with inconsistent error responses. Implemented a centralized error-handling middleware for better clarity.
- **Authentication Management**: Addressed issues with token expiration by implementing a refresh token strategy.
- **Database Integration**: Faced difficulties in schema design. Iterated on the design based on user feedback to ensure scalability.

## How to Contribute
If you'd like to contribute to the Task Manager Application, feel free to fork the repository and submit a pull request. Please ensure that your code adheres to the project's style and structure.

### Notes:
- Replace `<repository-url>`, `<your-mongodb-uri>`, and `<your-jwt-secret>` with your actual repository URL and configuration details.
