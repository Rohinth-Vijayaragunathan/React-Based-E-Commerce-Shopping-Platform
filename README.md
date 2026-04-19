# Modern E-Commerce Shopping platform using React.js

##  Project Overview
A responsive E-Commerce web application built using **React.js**, **Context API**, **React Router DOM**, and **Tailwind CSS**.  
The project allows users to browse products, search items, apply filters, manage cart items, and place orders through a clean and modern user interface.

---

##  Tech Stack
- React.js
- JavaScript (ES6+)
- Context API
- React Router DOM
- Tailwind CSS
- React Toastify

---

##  Project Flow

### 1️ Home Page
- User lands on the homepage.
- Displays:
  - Hero banner
  - Latest collections
  - Best sellers
  - Store policies
  - Newsletter subscription

### 2️ Product Collection Page
- User navigates to collection page.
- Features:
  - Product listing
  - Search products
  - Filter by category
  - Filter by type
  - Sort by price

### 3️ Product Details Page
- User clicks a product card.
- Displays:
  - Product images
  - Name
  - Price
  - Description
  - Size selection
  - Add to Cart button
  - Related products

### 4️ Add to Cart
- User selects size and adds product to cart.
- Cart count updates in navbar.

### 5️ Cart Page
- Displays selected products.
- Features:
  - Update quantity
  - Remove product
  - View subtotal
  - Shipping fee
  - Total price

### 6️ Checkout / Place Order
- User enters delivery details.
- Select payment method:
  - Stripe
  - Razorpay
  - Cash on Delivery

### 7️ Orders Page
- Displays placed order summary.
- Order status tracking UI.

### 8️ Login / Signup
- User can switch between:
  - Login
  - Create Account

---

##  State Management Flow

### Context API Used For:
- Product data
- Cart items
- Search state
- Currency
- Delivery fee
- Navigation helpers

---

## 📂 Component Flow

```text
App.jsx
│
├── Navbar
├── SearchBar
├── Routes
│   ├── Home
│   ├── Collection
│   ├── Product
│   ├── Cart
│   ├── PlaceOrder
│   ├── Orders
│   ├── Login
│   ├── About
│   └── Contact
└── Footer
