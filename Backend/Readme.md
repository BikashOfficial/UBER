# ✨ **/users/register Endpoint Documentation** ✨

This document provides detailed information about the `/users/register` and `/users/login` endpoints, including their descriptions, expected data formats, response examples, and status codes.

---

## 🚀 **Endpoint Description**
### `/users/register`
The `/users/register` endpoint allows clients to register a new user. It validates the incoming request, hashes the password for security, creates a new user in the database, and generates an authentication token for the user.

### `/users/login`
The `/users/login` endpoint allows existing users to log in by validating their credentials and generating an authentication token upon successful login.

---

## Endpoints
### 1. `/users/register`

#### **Method**
`POST`

#### **URL**
`/users/register`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                                       | Required |
|-------------|----------|---------------------------------------------------|----------|
| **fullname**    | Object   | The user's full name containing `firstname` and `lastname`. | Yes      |
| **firstname**   | String   | The user's first name (min length: 3 characters). | Yes      |
| **lastname**    | String   | The user's last name (min length: 3 characters).  | No       |
| **email**       | String   | The user's email address (must be unique).        | Yes      |
| **password**    | String   | The user's password (min length: 6 characters).   | Yes      |

### 📝 **Example Request Body**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the newly created user's data.

#### ✅ **Success Response** (Status Code: `201`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a5f0c1234abc56789ef012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with the following structure:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### 2. `/users/login`

#### **Method**
`POST`

#### **URL**
`/users/login`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                             | Required |
|-------------|----------|-----------------------------------------|----------|
| **email**       | String   | The user's email address.                | Yes      |
| **password**    | String   | The user's password.                     | Yes      |

### 📝 **Example Request Body**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the user's data.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a5f0c1234abc56789ef012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400` or `401`)
If the login fails due to invalid credentials, the server responds with the following structure:
```json
{
  "error": "Invalid email or password"
}
```

---

## 📊 **Status Codes**
| Status Code | Description                              |
|-------------|------------------------------------------|
| `201`       | User successfully created (register).    |
| `200`       | User successfully logged in (login).     |
| `400`       | Validation errors in the request payload.|
| `401`       | Authentication failed (login).           |
| `500`       | Internal server error.                   |

---

## 🛠 **Implementation Details**
- **Controller:** [`user.controller.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/controllers/user.controller.js)
- **Service:** [`user.service.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/services/user.service.js)
- **Model:** [`user.model.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/models/user.model.js)
- **Route:** [`user.routes.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/routes/user.routes.js)

---

🎉 **Thank you for using the `/users/register` and `/users/login` endpoints!**
