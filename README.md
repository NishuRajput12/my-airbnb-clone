# 🏠  Airbnb Clone

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-D2B48C?style=flat-square&logo=ejs&logoColor=white)](https://ejs.co/)

Airbnb Clone is a **full-stack Airbnb-inspired web application** built with **Node.js, Express.js, MongoDB, and EJS**.  
It allows users to **create, view, edit, and delete their own listings as well as leave reviews on properties.** with authentication, image uploads, and map integration.

---

## 🌟 Features

- User Authentication (Signup / Login)
- Social Login (Google, Facebook, Apple)
- Create, Edit, Delete Property Listings
- Image Upload via Cloudinary + Multer
- Map Integration with Mapbox
- Leave Reviews & Ratings
- Flash Messages for notifications
- Session-based Authentication
- RESTful Routes & MVC Architecture
- Responsive design with Bootstrap

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, Passport.js  
**Frontend:** EJS, EJS-Mate, CSS, JavaScript  
**Libraries & Tools:** Cloudinary, Multer, Mapbox SDK, Joi, dotenv, connect-flash, express-session, method-override  

---

## 📁 Folder Structure

Airbnb-project/
│
├── controllers/         # Business logic
│   ├── listing.js
│   ├── reviews.js
│   └── users.js
│
├── init/                # Database initialization / sample data
│   ├── data.js
│   └── index.js
│
├── models/              # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/              # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/               # Utility functions & error handling
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── cloud/               # Cloudinary config
│   └── config.js
│
├── public/              # Static files
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
│
├── views/               # EJS templates
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── listings/
│   │   ├── new.ejs
│   │   ├── edit.ejs
│   │   └── show.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── error.ejs
│
├── .env                 # Environment variables
├── app.js               # Main Express application
├── cloudConfig.js       # Cloudinary configuration
├── middleware.js        # Custom middlewares
├── schema.js            # Joi validation schemas
├── package.json
├── package-lock.json
└── README.md



## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/NishuRajput12/Airbnb-Project.git
