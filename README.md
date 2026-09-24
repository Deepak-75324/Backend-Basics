# Backend Basics 🚀

A beginner-friendly **Node.js backend learning project** built to understand backend development from the fundamentals.

This project is being developed step by step while learning **REST APIs, CRUD operations, MongoDB, authentication, authorization, email verification, and backend security**.

## 📌 Project Goals

The main goal of this project is to learn and practice:

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* CRUD Operations
* MVC Architecture
* Authentication & Authorization
* Password Hashing
* Email / OTP Verification
* Forgot Password & Reset Password
* Error Handling
* Environment Variables
* API Security

## 🛠️ Tech Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | JavaScript runtime    |
| Express.js | Backend framework     |
| MongoDB    | Database              |
| Mongoose   | MongoDB ODM           |
| EJS        | Server-side templates |
| dotenv     | Environment variables |
| bcrypt     | Password hashing      |
| Nodemailer | Sending emails        |

## 📂 Project Structure

```text
backend-crud/
│
├── controllers/
│   └── user_controller.js
│
├── models/
│   └── user.js
│
├── routes/
│   └── user_routes.js
│
├── views/
│   ├── user.ejs
│   ├── form.ejs
│   └── edit.ejs
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

> `.env` and `node_modules` are excluded from GitHub using `.gitignore`.

## 🔥 Current Features

### 1. User CRUD

The project currently includes basic user management:

* Create user
* Read users
* Update user
* Delete user
* Edit user through EJS form
* Store users in MongoDB

### 2. MVC Architecture

The backend is organized into:

```text
Routes → Controllers → Models → MongoDB
```

This makes the application easier to understand, maintain, and expand.

### 3. Database

MongoDB is used to store user information.

Example user:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "hashed-password"
}
```

## 🔐 Authentication Roadmap

Authentication is being added step by step.

Planned features:

* [ ] User registration
* [ ] Password hashing with bcrypt
* [ ] Login API
* [ ] Session / JWT authentication
* [ ] Logout
* [ ] Authentication middleware
* [ ] Authorization
* [ ] Email verification
* [ ] OTP verification
* [ ] Forgot password
* [ ] Reset password
* [ ] Protected routes

## 📧 Email Verification

A future part of this project is email verification using OTP.

Planned flow:

```text
User Registration
       ↓
Generate OTP
       ↓
Send OTP to Email
       ↓
User Enters OTP
       ↓
Verify OTP
       ↓
Email Verified
       ↓
Account Activated
```

## 🔑 Forgot Password

Planned password-reset flow:

```text
Enter Email
     ↓
Check User
     ↓
Generate Reset Token / OTP
     ↓
Send Email
     ↓
Verify Token
     ↓
Set New Password
```

## 🌱 Learning Progress

### Backend Fundamentals

* [x] Node.js basics
* [x] Express.js basics
* [x] Routes
* [x] Middleware
* [x] EJS
* [x] MongoDB connection
* [x] Mongoose
* [x] MVC structure
* [x] CRUD operations
* [x] Environment variables
* [ ] Error handling
* [ ] API validation

### Authentication

* [ ] Registration
* [ ] Login
* [ ] Password hashing
* [ ] Authentication middleware
* [ ] Authorization
* [ ] Logout
* [ ] Email verification
* [ ] OTP
* [ ] Forgot password
* [ ] Reset password

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Deepak-75324/Backend-Basics.git
```

Move into the project:

```bash
cd Backend-Basics
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

Start the server:

```bash
node app.js
```

For development with nodemon:

```bash
npx nodemon app.js
```

## 🌐 API Base URL

```text
/api/users
```

Example routes:

| Method | Route                 | Purpose            |
| ------ | --------------------- | ------------------ |
| GET    | `/api/users`          | Get all users      |
| GET    | `/api/users/new`      | User creation form |
| POST   | `/api/users`          | Create user        |
| GET    | `/api/users/:id/edit` | Edit user          |
| PUT    | `/api/users/:id`      | Update user        |
| DELETE | `/api/users/:id`      | Delete user        |

## 🔒 Environment Variables

Sensitive information is stored in `.env` and is **not committed to GitHub**.

Example:

```env
MONGO_URI=...
JWT_SECRET=...
EMAIL_USER=...
EMAIL_PASS=...
```

`.gitignore` contains:

```gitignore
node_modules/
.env
```

## 🎯 Future Improvements

After completing the basic backend, I plan to add:

* REST API improvements
* Input validation
* Centralized error handling
* Authentication
* Authorization
* JWT
* OTP verification
* Email verification
* Forgot/reset password
* Role-based access control
* API testing
* Security improvements
* Deployment

## 📚 Purpose

This repository is primarily a **learning and practice project**.

I am building the project step by step to understand how real-world backend applications are structured and how different backend concepts work together.

## 👨‍💻 Author

**Deepak Mandal**

B.Tech — Computer Science & Engineering (AI/ML)

GitHub: [Deepak-75324](https://github.com/Deepak-75324)
