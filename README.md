🏡 WanderLust – Property Listing Platform
WanderLust is a full-stack web application that allows users to explore, create, and review property listings. It provides a seamless experience for users to browse listings, upload property details with images, and share reviews.
🚀 Features

🔐 User Authentication & Authorization

Secure login/signup using Passport.js
Session-based authentication
Role-based access control

🏘️ Property Listings

Create, edit, and delete listings
Add property details like title, description, price, and location
Upload property images via Cloudinary

⭐ Reviews & Ratings

Users can add, edit, and delete reviews
Server-side validation for data integrity

🔎 Search & Filter

Search properties based on keywords
Filter listings by location, price, etc.

⚙️ RESTful APIs

Fully structured CRUD operations for listings and reviews

🛠️ Tech Stack

Backend: Node.js, Express.js
Frontend: EJS (Embedded JavaScript Templates)
Database: MongoDB
Authentication: Passport.js
Image Storage: Cloudinary
Version Control: Git

📌 API Endpoints

For listing

GET /listings
Get all listings
POST /listings
Create new listing
GET /listings/:id
Get single listing
PUT /listings/:id
Update listing
DELETE /listings/:id
Delete listing

For reviews

POST /listings/:id/reviews
Add review
DELETE /listings/:id/reviews/:reviewId
Delete review

🔒 Authentication Flow

User signs up or logs in
Passport.js authenticates credentials
Session is maintained using cookies
Protected routes require login

🌐 Deployment (Optional)

You can deploy the project using:
Render / Railway / Heroku for backend
MongoDB Atlas for database
Cloudinary for media storage

📸 Screenshots

