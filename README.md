# Django React Ecommerce

Modern full stack ecommerce web application built using React, Django REST Framework, JWT authentication, and SQLite.

---

# Features

* User Registration
* User Login Authentication
* JWT Authentication
* Product Listing
* Product Details Page
* Search Products
* Category Filter
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

## Backend

* Django
* Django REST Framework
* Simple JWT
* SQLite

---

# Project Structure

```bash
frontend/
backend/
```

---

# Installation

## Clone Repository

```bash
https://github.com/ganigogula/django-react-ecommerce.git
```

---

# Backend Setup

## Move to backend folder

```bash
cd backend
```

## Install dependencies

```bash
python -m pip install -r requirements.txt
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
/api/products/
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
/api/orders/create/
/api/orders/
```

---

# Authentication

* JWT Token Authentication
* Protected Routes
* Login Required for Checkout and Orders

---

# Future Improvements

* Online Payments
* Product Reviews
* Wishlist
* Admin Dashboard
* Product Categories from Database
* Order Tracking

---

# Deployment

## Backend

* Render

## Frontend

* Vercel

---

# Author

Ganesh Gogula

