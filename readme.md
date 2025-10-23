# 🏠 Room Booking Management System (MERN Stack)

A simple **MERN (MongoDB, Express, React, Node.js)** project built to manage and display available rooms.  
This project consists of **three main parts**:
1. **Backend API** – Handles all data operations, authentication, and API endpoints.
2. **Admin Panel (Frontend)** – Allows admins to manage rooms (create, edit, delete, view).
3. **Client Site (Frontend)** – Displays available rooms for visitors and allows viewing room details.

---

## 📁 Project Structure

room-booking-system/
│
├── backend/ # Node.js + Express + MongoDB API
│ ├── server.js
│ ├── config/
│ ├── models/
│ ├── routes/
│ └── controllers/
│
├── admin/ # React Admin Dashboard
│ ├── src/
│ ├── public/
│ └── package.json
│
└── client/ # React Client Website (for users)
├── src/
├── public/
└── package.json


---

## ⚙️ Tech Stack

**Frontend:** React, CSS, Axios (or Fetch), React Router  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ODM)  
**State Management:** React Hooks (useState, useEffect)  
**Environment:** dotenv for configuration  

---

## 🚀 Features

### 🧩 Admin Panel
- Add, update, and delete rooms
- View list of all rooms
- Upload and manage room images
- Manage availability and pricing

### 🌍 Client Site
- View all available rooms
- Filter by room type (Deluxe / Non-Deluxe)
- View room details
- Contact or book options (future enhancement)

### ⚙️ Backend API
- RESTful API endpoints
- CRUD operations for rooms
- MongoDB connection via Mongoose
- Environment variable configuration

