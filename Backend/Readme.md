# ✨ **API Documentation** ✨

This document provides detailed information about the `/users` and `/captains` API endpoints, including their descriptions, expected data formats, response examples, and status codes.

---

## 🚀 **User Endpoints**

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

### 3. `/user/profile`

#### **Method**
`GET`

#### **URL**
`/user/profile`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with the authenticated user's profile details.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
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

#### ❌ **Error Response** (Status Code: `401`)
If the user is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

### 4. `/user/logout`

#### **Method**
`POST`

#### **URL**
`/user/logout`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with a message confirming the logout.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "message": "User logged out successfully"
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the user is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

## 🚀 **Captain Endpoints**

### 1. `/captains/register`

#### **Method**
`POST`

#### **URL**
`/captains/register`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                                       | Required |
|-------------|----------|---------------------------------------------------|----------|
| **fullname**    | Object   | The captain's full name containing `firstname` and `lastname`. | Yes      |
| **firstname**   | String   | The captain's first name (min length: 3 characters). | Yes      |
| **lastname**    | String   | The captain's last name (min length: 3 characters).  | No       |
| **email**       | String   | The captain's email address (must be unique).        | Yes      |
| **password**    | String   | The captain's password (min length: 6 characters).   | Yes      |
| **licenseNumber** | String | The captain's license number.                      | Yes      |

### 📝 **Example Request Body**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "password": "securepassword456",
  "licenseNumber": "ABCD1234"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the newly created captain's data.

#### ✅ **Success Response** (Status Code: `201`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
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
      "msg": "License number is required",
      "param": "licenseNumber",
      "location": "body"
    }
  ]
}
```

---

### 2. `/captains/login`

#### **Method**
`POST`

#### **URL**
`/captains/login`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                             | Required |
|-------------|----------|-----------------------------------------|----------|
| **email**       | String   | The captain's email address.                | Yes      |
| **password**    | String   | The captain's password.                     | Yes      |

### 📝 **Example Request Body**
```json
{
  "email": "janedoe@example.com",
  "password": "securepassword456"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the captain's data.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
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

### 3. `/captain/profile`

#### **Method**
`GET`

#### **URL**
`/captain/profile`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with the authenticated captain's profile details.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the captain is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

### 4. `/captain/logout`

#### **Method**
`POST`

#### **URL**
`/captain/logout`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with a message confirming the logout.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "message": "Captain logged out successfully"
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the captain is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

## 📊 **Status Codes**
| Status Code | Description                              |
|-------------|------------------------------------------|
| `201`       | User or Captain successfully created.    |
| `200`       | Request successful (login, profile, logout). |
| `400`       | Validation errors in the request payload.|
| `401`       | Authentication failed or unauthorized.   |
| `500`       | Internal server error.                   |

---

## 🛠 **Implementation Details**

- **User Controller:** [`user.controller.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/controllers/user.controller.js)
- **User Service:** [`user.service.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/services/user.service.js)
- **User Model:** [`user.model.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/models/user.model.js)
- **User Routes:** [`user.routes.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/routes/user.routes.js)

- **Captain Controller:** [`captain.controller.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/controllers/captain.controller.js)
- **Captain Service:** [`captain.service.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/services/captain.service.js)
- **Captain Model:** [`captain.model.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/models/captain.model.js)
- **Captain Routes:** [`captain.routes.js`](https://github.com/BikashOfficial/UBER/blob/main/Backend/routes/captain.routes.js)


---

🎉 **Thank you for using the `/users` and `/captain`API endpoints!**