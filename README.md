# Shopline — React + Vite E-Commerce App

A simple e-commerce app built with React, Vite, and the [DummyJSON](https://dummyjson.com/) products API.

## Features

- **Product Listing (`/`)** — fetches all products and displays them in a responsive grid (image, title, price).
- **Product Details (`/product/:id`)** — fetches a single product, shows its image gallery, title, description, price, and an "Add to Cart" button.
- **Cart (`/cart`)** — lists cart items with title, price, quantity (adjustable), and line total, plus a bill summary (subtotal and total amount).

## Tech Stack

- React + Vite
- React Router DOM (routing)
- Axios (data fetching)
- Context API (cart state)

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  api/
    products.js        # Axios calls to DummyJSON API
  context/
    CartContext.jsx    # Cart state (add/remove/update quantity)
  components/
    Navbar.jsx          # Top nav with cart link/count
    ProductCard.jsx      # Card used in the product grid
    Loader.jsx           # Loading state
    ErrorMessage.jsx     # Error state
  pages/
    ProductListing.jsx   # / route
    ProductDetails.jsx   # /product/:id route
    Cart.jsx              # /cart route
  App.jsx                 # Routes
  main.jsx                # App entry, providers
```
