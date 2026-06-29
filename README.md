# NovaCart

NovaCart is a modern e-commerce web application built with React and Vite. It allows users to browse products, view product details, and manage a shopping cart through a clean and responsive interface.

## Features

- Browse products in a responsive grid
- View detailed product information
- Add products to the shopping cart
- Update product quantities in the cart
- Responsive design for desktop and mobile devices
- Fetches product data using Axios

## Tech Stack

- React
- Vite
- React Router DOM
- Axios
- Context API
- CSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```
src/
├── api/
│   └── products.js
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── ProductListing.jsx
│   ├── ProductDetails.jsx
│   └── Cart.jsx
├── App.jsx
└── main.jsx
```

## Author

**Surbhi Sharma**