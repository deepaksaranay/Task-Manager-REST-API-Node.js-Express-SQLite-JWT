# Task Manager API

A RESTful Task Manager API built with **Node.js**, **Express.js**, **SQLite**, and **JWT Authentication**. This project demonstrates secure user authentication and task management using a clean MVC architecture.

## Features

* User Registration
* User Login with JWT Authentication
* Password Hashing using bcrypt
* Create, Read, Update, and Delete (CRUD) Tasks
* SQLite Database Integration
* Protected API Routes
* RESTful API Design
* Organized MVC Project Structure

## Tech Stack

* JavaScript
* Node.js
* Express.js
* SQLite
* JSON Web Token (JWT)
* bcrypt

## Installation

```bash
npm install
```

## Run the Project

```bash
npm start
```

The server will start at:

```text
http://localhost:3000
```

## Project Structure

```text
task-manager-api/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
├── package.json
└── README.md
```

## Future Improvements

* Task Categories
* Due Dates and Reminders
* Search and Filter Tasks
* Pagination
* API Documentation with Swagger
* Unit Testing
* Docker Support

## License

This project is for learning and portfolio purposes.
# Task Manager REST API

A RESTful Task Manager API built using **Node.js**, **Express.js**, **SQLite**, **JWT Authentication**, and **bcrypt**. This project allows users to register, log in securely, and manage their personal tasks through protected API endpoints.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt
- Create Task
- Get All Tasks
- Get Task by ID
- Update Task
- Delete Task
- Protected Routes
- SQLite Database
- RESTful API
- MVC Architecture

---

## Technologies Used

- JavaScript
- Node.js
- Express.js
- SQLite3
- JSON Web Token (JWT)
- bcrypt

---

## Project Structure

```
task-manager-rest-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── server.js
├── package.json
├── README.md
└── .gitignore
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/task-manager-rest-api.git
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tasks | Create Task |
| GET | /api/tasks | Get All Tasks |
| GET | /api/tasks/:id | Get Task By ID |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

## License

This project is licensed under the MIT License.

---

## Author

**Deepak Kumar**
