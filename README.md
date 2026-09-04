# 🏡 WanderLust – Property Booking Platform

**[Live Demo](https://wanderlust-major-project-yz4d.onrender.com/)**

WanderLust is a full-stack property booking platform built with a structured backend following **MVC architecture**. It allows users to browse, list, and book properties, leave reviews, and get basic recommendations based on their preferences and interactions.

---

## 🚀 Features

### 🔐 User Authentication & Authorization
- Secure login/signup using **Passport.js**
- Session-based authentication with route handling
- Role-based access control for protected routes

### 🏘️ Property Listings
- Create, edit, and delete listings
- Add property details like title, description, price, and location
- Upload property images via Cloudinary

### ⭐ Reviews & Recommendations
- Users can add, edit, and delete reviews
- Basic recommendation system based on user preferences and interactions
- Server-side validation for data integrity

### ⚙️ RESTful APIs
- Fully structured RESTful APIs for listings, bookings, and reviews following CRUD principles
- Efficient database queries using **Mongoose (ODM)** for optimized data handling

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Database:** MongoDB (via Mongoose ODM)
- **Authentication:** Passport.js
- **Image Storage:** Cloudinary
- **Version Control:** Git

---

## 📌 API Endpoints

**Listings**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/listings` | Get all listings |
| POST | `/listings` | Create new listing |
| GET | `/listings/:id` | Get single listing |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |

**Reviews**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/listings/:id/reviews` | Add review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |

---

## 🔒 Authentication Flow

1. User signs up or logs in
2. Passport.js authenticates credentials
3. Session is maintained using cookies
4. Protected routes require login

---

## 🌐 Deployment

- Backend deployed on **Render**
- **MongoDB Atlas** used for the database
- Images stored on **Cloudinary**

---

## 📷 Screenshots

<img width="100%" alt="WanderLust screenshot 1" src="https://github.com/user-attachments/assets/4024795d-44e2-4612-91bd-9c5cfd4b1840" />
<img width="100%" alt="WanderLust screenshot 2" src="https://github.com/user-attachments/assets/2061c231-ea92-44fd-a9cd-2515e31beb48" />
<img width="100%" alt="WanderLust screenshot 3" src="https://github.com/user-attachments/assets/fbf08986-a89b-4260-bd04-e2b89ad82bcc" />
<img width="100%" alt="WanderLust screenshot 4" src="https://github.com/user-attachments/assets/43208f70-5f1b-4045-81c1-d8d7c232439d" />
<img width="100%" alt="WanderLust screenshot 5" src="https://github.com/user-attachments/assets/f9f86b2b-ad92-457c-94f2-36ebe6be59b4" />
<img width="100%" alt="WanderLust screenshot 6" src="https://github.com/user-attachments/assets/2749935b-fc2a-47df-aac5-ce6906386959" />
