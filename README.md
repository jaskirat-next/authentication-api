# authentication-api
 
<!-- 🔐 JWT Authentication & Role-Based Access API -->

This project is a Node.js + Express + MongoDB backend API that implements JWT authentication and role-based access control (RBAC).
Users can register, login, get tokens, and access routes based on their roles (e.g., user, admin, manager).

<!-- 🚀 Features -->

User Registration & Login

Password hashing with bcrypt

Authentication with JWT

Middleware to protect routes

Role-based access control (RBAC)

MongoDB with Mongoose

Environment variable support with dotenv

<!-- 📦 Tech Stack -->

Node.js

Express.js

MongoDB (with Mongoose ODM)

JWT (jsonwebtoken)

bcryptjs

dotenv


<!-- ⚙️ Installation -->

Clone the repo and install dependencies:

git clone https://github.com/your-username/authentication-api.git
cd authentication-api
npm install


Create a .env file in the root:

MONGO_URI=mongodb://127.0.0.1:27017/jwtAuth
JWT_SECRET=yourSecretKey123
JWT_EXPIRES_IN=1d
PORT=5000

<!-- ▶️ Running the Project -->
npm start


<!-- API will run on: -->
👉 http://localhost:5000

📌 API Endpoints
🔹 Auth Routes

Register

POST /api/auth/register


<!-- Body JSON: -->

{
  "userName": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}


<!-- Login -->

POST /api/auth/login


<!-- Body JSON: -->

{
  "email": "john@example.com",
  "password": "password123"
}


<!-- Response Example: -->

{
  "_id": "64f12345abc67890def12345",
  "userName": "john_doe",
  "email": "john@example.com",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}

<!-- 🔹 Protected Routes -->

User Route

GET /api/auth/user


Requires: Authorization: Bearer <token>

Allowed roles: user, admin

Admin Route

GET /api/auth/admin


Requires: Authorization: Bearer <token>

Allowed roles: admin

<!-- 🔑 User Roles -->

user → Can access general routes

admin → Full access to admin-only routes

manager → Custom role (can be configured)

<!-- 🧪 Testing with Postman -->

Register a user with POST /api/auth/register

Login with POST /api/auth/login → Copy token

Add token in Headers:

Authorization: Bearer <your_token>


Test /api/auth/user or /api/auth/admin based on role

👨‍💻 Author

Built with ❤️ by Jaskirat Singh