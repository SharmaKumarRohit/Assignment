# Workout Management Application (MERN Stack)

A full-stack workout management application built using the **MERN Stack** with secure authentication using **JWT** and **bcrypt**.

## Live Application Structure

| Service  | Platform      | Links                                                       |
| -------- | ------------- | ----------------------------------------------------------- |
| Frontend | Vercel        | N/A                                                         |
| Backend  | Render        | N/A                                                         |
| Database | MongoDB Atlas | mongodb+srv://<db_user>:<pwd>@cluster0.wgvhanf.mongodb.net/ |

## Tech Statck

- **Frontend**
  - ReactJS (Vite)
  - Tailwind CSS
  - React Router DOM
  - Fetch API for data fetching

- **Backend**
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongoose
  - JWT Authentication
  - bcrypt for password hashing

## Features

- User Authentication `(Signup/Login)`
- `JWT`-based Authentication
- Password hashing with `bcrypt`
- Protected Routes
- CRUD Operations
- User Specific Data
- Global State Management `(Context API/useReducer)`

## Authentication & Security

This application implements secure authentication using:

### JWT (JSON Web Token)

- `login/signup`, the server generates a JWT token.
- The token is sent to the client (usually in localStorage).
- For protected routes, the token is sent in the request headers.
  Authorization: Bearer <token>
- Middleware verifies the token before allowing access to protected routes.

#### JWT Flow

1. User register or login.
2. Server verifies credentials.
3. Server generate JWT token using `jwt.sign()`.
4. Store token in client `localStorage`
5. Client sends token with protected API requests.
6. Server verifies token `(jwt.verify())` and send response.

### Password hashing (bcrypt)

- User passwords are **never stored in plain text**.
- Before saving password to the database:
  - Password is hashed using `bcrypt`.
- During login:
  - Entered password is compared with stored hashed password using `bcrypt.compare()`

## Backend Setup

**Backend setup installation commands**

```bash
npm init -y
npm install express / npm i express
npm i nodemon --save-dev
npm i mongoose
npm i cors
npm i dotenv
```

**Run backend code for this command**

```bash
npm run dev
```

**`.env` file setup data**

```bash
PORT=4000
MONGO_URI=mongodb+srv://<db_user>:<db_pass>@cluster0.wgvhanf.mongodb.net/
SECRET_KEY=NjFLJrMtqHXhL2voduqLYXwDTPlsOXws4WD1hzLn5at
```

## API Endpoints

### Authentication Routes

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/user/signup` | Register new user   |
| POST   | `/api/user/login`  | Login existing user |

### Workouts Routes

| Method | Endpoint            | Description                      |
| ------ | ------------------- | -------------------------------- |
| Get    | `/api/workouts`     | Get all workouts (user specific) |
| POST   | `/api/workouts`     | Create a new workout             |
| GET    | `/api/workouts/:id` | Get a single workout             |
| DELETE | `/api/workouts/:id` | Delete a single workout          |
| PATCH  | `/api/workouts/:id` | Update a single workout          |

All workout routes require a valid JWT token.

## Frontend Setup

**Frontend setup installation commands**

```bash
npm create vite@latest
npm install tailwindcss @tailwindcss/vite
npm i react-router-dom
npm i react-icons
npm i date-fns
```

**Base_URL**

```bash
http://localhost:4000/api
```
