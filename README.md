# 👟 SneakLab — Sneaker Store

A full-stack sneaker e-commerce web application built with **HTML/CSS/JavaScript** on the frontend and **Node.js + Express + MongoDB** on the backend.

> Built as a portfolio project to demonstrate full-stack web development skills.

---

## 🌐 Live Demo

> _Coming soon — deploying on Render_

---

## 📸 Preview

| Home Page | Checkout |
|-----------|----------|
| Product grid with filters, cart & wishlist | Full checkout form with order confirmation |

---

## ✨ Features

- 🛍️ **30 Products** across brands like Nike, Adidas, Jordan, Puma, Vans & more
- 🔍 **Search & Filters** — filter by category, brand, price range, and sort order
- 🛒 **Shopping Cart** — add/remove items, auto delivery fee, grand total
- ❤️ **Wishlist** — save products for later
- 🪟 **Product Modal** — quick view with details
- 💳 **Checkout Page** — full form with card formatting and order confirmation
- 📦 **Order Saving** — orders stored in MongoDB via REST API
- 📱 **Responsive Design** — works on mobile, tablet, and desktop
- 🌙 **Dark Theme** — sleek dark UI with accent colors

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Fonts | Google Fonts (Bebas Neue, DM Sans) |
| Images | Unsplash |
| Deployment | Render |

---

## 📁 Project Structure

```
Sneaklab/
├── frontend/
│   ├── index.html        # Main store page
│   ├── payment.html      # Checkout page
│   ├── script.js         # All frontend logic
│   └── style.css         # Styles & dark theme
│
├── backend/
│   ├── server.js         # Express app entry point
│   ├── models/
│   │   └── Order.js      # Mongoose order schema
│   ├── routes/
│   │   └── orders.js     # POST & GET /api/orders
│   └── package.json
│
├── .gitignore
├── render.yaml           # Render deployment config
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)

### 1. Clone the repo

```bash
git clone https://github.com/mayankkushwaha24082006/Sneaklab.git
cd Sneaklab
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Set up environment variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4. Run the server

```bash
npm start
```

Open your browser at **http://localhost:5000**

---

## 🌍 Deploying on Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Set the following:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variable:
   - `MONGO_URI` = your MongoDB Atlas URI
6. Click **Deploy** 🎉

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/orders` | Place a new order |
| `GET` | `/api/orders` | Get all orders |

### POST `/api/orders` — Request Body

```json
{
  "customer": {
    "firstName": "Mayank",
    "lastName": "Kushwaha",
    "email": "mayank@example.com",
    "phone": "9999999999",
    "address": "123 Street",
    "city": "Delhi",
    "pin": "110001",
    "state": "Delhi"
  },
  "items": [
    { "id": 1, "title": "Air Jordan 4", "brand": "Jordan", "price": 6253 }
  ],
  "subtotal": 6253,
  "delivery": 0,
  "tax": 1126,
  "total": 7379
}
```

---

## 👨‍💻 Author

**Mayank Kushwaha**
- GitHub: [@mayankkushwaha24082006](https://github.com/mayankkushwaha24082006)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
