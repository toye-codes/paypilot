# PayPilot

A scalable financial management system built to help businesses track transactions, manage inventory, and gain insights into their cash flow — all from a clean, structured interface.

---

## 🔗 Live Demo

(https://paypilot-three.vercel.app/)

## 📸 Preview



---

## 💡 Why I Built This

Most small business tools are either too complex or too limited.

I built PayPilot to explore how a **frontend-heavy architecture** can handle complex financial workflows while staying modular, scalable, and easy to maintain.

This project focuses on **state design, structure, and clarity**, not just UI.

---

## 📖 Overview

PayPilot centralizes core business operations:

* Financial tracking (inflow & outflow)
* Inventory management
* Role-based system control
* Automated insights using AI summaries

The goal is to simulate how real-world fintech dashboards are structured on the frontend.

---

## ✨ Core Features

### 📊 Transaction Management

* Tracks sales, expenses, salaries, and operational costs
* Categorized financial records for better visibility

### 📦 Inventory System

* Monitor stock levels
* Track product availability and updates

### 🔐 Role-Based Access Control

* Admin / Super Admin system
* Controlled access to sensitive operations

### 🚨 Smart Alerts

* Detects duplicate or suspicious transactions
* Prevents data inconsistencies

### 🤖 AI Insights

* Summarizes financial activity
* Shows trends in cash flow and estimated profit

---

## 🧠 Key Engineering Decisions

* **Zustand over Context API**
  → Chosen for better scalability and cleaner state separation

* **Modular Folder Structure**
  → Feature-based grouping for maintainability and growth

* **Next.js App Router**
  → Enables better routing, layout control, and scalability

---

## 🛠 Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Zustand

---

## 📁 Project Structure

```
  /app
    /inventory
      page.tsx
    /transactions
      page.tsx
    layout.tsx

  /features
    /inventory
      /components
        InventoryView.tsx
        InventoryTable.tsx
        InventoryFilters.tsx

      /hooks
        useInventoryStore.ts
        useInventoryLogic.ts

      /services
        inventory.api.ts

      /utils
        filterInventory.ts

      index.ts

    /transactions
      /components
      /hooks
      /services
      /utils
      index.ts

  /shared
    /components
    /hooks
    /utils

  /lib
---

## 🚀 Getting Started

```bash
git clone https://github.com/toye-codes/paypilot.git
cd paypilot
npm install
npm run dev
```

---

## 📈 Future Improvements

* Payment integration (Stripe / Paystack)
* Advanced analytics dashboard (charts & reports)
* Real-time updates (WebSockets or Firebase)
* Multi-tenant business support

---

## 🧠 What I Learned

* Designing scalable frontend architectures
* Managing complex global state with Zustand
* Structuring large applications for maintainability
* Thinking beyond UI — focusing on system design

---

## 👤 Author

* GitHub: @toye-codes
* LinkedIn: (https://www.linkedin.com/in/olusanya-agbesanya/)
