
# EBANX - Software Engineer Challenge

This is a simple API built as part of the EBANX Software Engineer challenge. It provides functionality for basic banking operations such as deposit, withdraw, transfer, balance query, and reset.

> ❗ Durability is not required — this API works fully in memory.

---

## 📋 Requirements

- Node.js 18+ or 20+
- npm or yarn

---

## 🚀 Getting Started

### 1. Clone the project
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run locally (with ts-node)
```bash
npx ts-node src/index.ts
```

Or, if using the compiled version:

### 3b. Compile and run
```bash
npm run build
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint         | Description                           |
|--------|------------------|---------------------------------------|
| POST   | `/reset`         | Resets all accounts and balances      |
| GET    | `/balance`       | Returns balance for given account ID |
| POST   | `/event`         | Handles deposit, withdraw, transfer   |

---

### 🧪 Example requests

#### POST `/reset`
```bash
curl -X POST http://localhost:3000/reset
```

#### GET `/balance?account_id=100`
```bash
curl http://localhost:3000/balance?account_id=100
```

#### POST `/event`
```bash
curl -X POST http://localhost:3000/event      -H "Content-Type: application/json"      -d '{"type":"deposit", "destination":"100", "amount":10}'
```

---

## ✅ Challenge Requirements Implemented

- [x] `/reset` endpoint
- [x] `/balance?account_id=...`
- [x] `/event` endpoint supporting:
  - `deposit`
  - `withdraw`
  - `transfer`
- [x] In-memory persistence
- [x] Schema validation with Zod
- [x] Error handling middleware
- [x] Clean code and separation of concerns
- [x] Ngrok-ready for public testing

---

## 👨‍💻 Author

Made by **Vitor Bertoldi** for the EBANX Software Engineer Challenge.
