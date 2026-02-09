#  BuyBee – E-commerce Frontend

BuyBee is a modern e-commerce frontend application built with **Next.js (App Router)**.  
The project focuses on clean UI, authentication, product listing, and production-ready best practices.

This project was developed as part of a **frontend** to demonstrate skills in **Next.js, TypeScript, and modern React development**.

## 🌐 Live Demo

👉 **Live Site:** https://buy-bee-c46y.vercel.app   
👉 **GitHub Repository:** https://github.com/kamrulhasanPro/BuyBee


## Features

- 🔐 Authentication with NextAuth (Google OAuth)

- 🛍️ Product listing page

- 🧾 Dynamic product fetching

<!-- 🔒 Protected routes using session -->

- 🛒 Add products to cart
- ➕ Increase and ➖ decrease cart item quantity
- ❌ Remove products from cart
- ❤️ Add and remove products from favorite (wishlist)

- 🧠 Server & Client Component separation

- 📦 Type-safe code with TypeScript

- 🎨 Responsive UI with Tailwind CSS

- ⚡ Optimized performance using App Router

- 🚀 Production-ready build configuration

## Technologies Used

- Next.js 16 (App Router)

- React 19

- TypeScript

- NextAuth v4 (Authentication)

- Tailwind CSS

- Shadcn UI

- React Slick

- Vercel (Deployment ready)

## 🚀 Project Setup Instructions

Follow the steps below to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kamrulhasanPro/BuyBee
cd BuyBee
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory and add:

```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret
```

    ⚠️ Make sure your Google OAuth redirect URI is:
    http://localhost:3000/api/auth/callback/google

### 4️⃣ Run the Development Server

```bash
npm run dev
```

The app will be available at:   
👉 http://localhost:3000
