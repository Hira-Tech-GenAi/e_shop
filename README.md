# e_shop
e-commerce shop next.js project
# Clerk Authentication System with API-Driven Product Management

This project implements a **Clerk authentication system** within a Next.js application. It features dynamic product management and a seamless user experience with API integration.

## Features

### 1. Authentication
- Integrated **Clerk authentication system** to handle user sign-in and sign-up securely.

### 2. API-Driven Products
- Fetch **product categories and items** dynamically from `fakestore_api.com`.
- Display a **loader button** until the products are fully downloaded.

### 3. Add to Cart Functionality
- When an item is added to the cart, a **popup notification** confirms the action.

### 4. State Management
- Utilizes **Redux** for managing the cart, ensuring a smooth and efficient user experience.

### 5. UI Components
- Built with `shadcn/ui` for a polished and responsive interface.
- Includes an initialized **button component** for interactive functionality.

## Installation and Setup

1. **Install shadcn/ui**:
   ```bash
   npm install @shadcn/ui
   ```

2. **Initialize shadcn/ui**:
   ```bash
   npx shadcn-init
   ```

3. **Add Button Component**:
   Include a button component from the `shadcn/ui` library for interactivity.

4. **Set Up Redux**:
   Install Redux and set up the cart state management.
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

## API Integration
- Products and categories are fetched from `https://fakestore_api.com`.
- Implement a loader to display until the data is successfully retrieved.

## Enhancements
- Real-time cart updates with Redux.
- Modern and sleek UI with `shadcn/ui`.
- Popup feedback for better user interaction.

## Summary
This project combines dynamic API integration, a robust authentication system, and a modern UI to deliver a user-friendly e-commerce experience.

---

**Developer**: Hira Khalid

