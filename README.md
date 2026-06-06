## Live Demo

🔗 https://django-react-ecommerce-0h1f.onrender.com

# Django React Ecommerce

Modern full-stack ecommerce web application built using React, Django REST Framework, JWT Authentication, and SQLite.

---

# Features

* User Registration
* User Login Authentication
* JWT Authentication
* Product Listing
* Product Details Page
* Search Products
* Category Filtering
* Add To Cart
* Cart Quantity Management
* Checkout System
* Order Management
* Protected Routes
* Responsive UI

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* Context API
* CSS

## Backend

* Django
* Django REST Framework
* Simple JWT
* SQLite

---

# Project Architecture

```text
React Frontend
       ↓
Axios API Requests
       ↓
Django REST API
       ↓
SQLite Database
```

---

# Project Structure

```text
django-react-ecommerce/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/ganigogula/django-react-ecommerce.git
```

---

# Backend Setup

## Move to backend folder

```bash
cd backend
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run migrations

```bash
python manage.py migrate
```

## Start backend server

```bash
python manage.py runserver
```

Backend runs on:

```text
https://django-react-ecommerce-0h1f.onrender.com
```

---

# Frontend Setup

## Move to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend server

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Products

```text
/api/products/
/api/products/<id>/
```

## Authentication

```text
/api/users/register/
/api/users/login/
```

## Orders

```text
/api/orders/
/api/orders/create/
```

---

# Authentication

* JWT Token Authentication
* Protected Routes
* Login Required for Orders and Checkout

---

# Deployment

## Backend

* Render

## Frontend

* Vercel

---

# Future Improvements

* Online Payments
* Product Reviews
* Wishlist
* Admin Dashboard
* Product Categories from Database
* Order Tracking

---

# Author

Ganesh Gogula
