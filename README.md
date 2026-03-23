🏡 WanderLust – Property Listing Platform
WanderLust is a full-stack web application that allows users to explore, create, and review property listings. It provides a seamless experience for users to browse listings, upload property details with images, and share reviews.
🚀 Features

##Screenshots
<img width="100%" height="629" alt="image" src="https://github.com/user-attachments/assets/4024795d-44e2-4612-91bd-9c5cfd4b1840" />

<img width="1360" height="641" alt="image" src="https://github.com/user-attachments/assets/2061c231-ea92-44fd-a9cd-2515e31beb48" />

<img width="1365" height="635" alt="image" src="https://github.com/user-attachments/assets/fbf08986-a89b-4260-bd04-e2b89ad82bcc" />

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

🌐 Deployment 

Deployed the project backend on Render
used MongoDB Atlas for the databse.
Images stored on cloudinary
📸 Screenshots

