# AjiraX Marketplace Platform

AjiraX is a high-fidelity, production-grade freelancing marketplace designed for the African digital economy, with a focus on secure M-Pesa integrated payments.

## 🚀 Key Features

- **Dynamic Marketplace**: Dedicated modules for Find Jobs, Find Freelancers, Service Gigs, and Creative Contests.
- **Production Dashboard**: High-fidelity sidebar and profile views accessible only to authenticated users.
- **M-Pesa Integration Ready**: Frontend architecture prepared for Safaricom Daraja API synchronization.
- **Legal & Compliance**: Full suite of legal pages including Privacy Policy, Terms of Service, and Cookie Consent systems.
- **Modern Tech Stack**: Built with Next.js 14, Tailwind CSS, Lucide Icons, and Axios for backend communication.

## 🎨 Design Language

- **Headings**: Bebas Neue (Bold, African-inspired)
- **Body**: Fredoka & Riffic (Modern, Friendly)
- **Accents**: Dancing Script (Professional Signature)
- **Aesthetic**: Surreal high-end visuals, glassmorphism, and premium "squircle" UI components.

## 🛠️ Project Structure

- `/frontend`: Next.js application with App Router and AuthWrapper logic.
- `/backend`: FastAPI/PostgreSQL architecture (to be run via Podman).

## 📦 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
Backend runs with Podman/Docker. Ensure the API is available at `http://localhost:8000`.

## 🛡️ Security & Compliance
- **Escrow System**: Funds held securely until project approval.
- **Data Protection**: Full Cookie Policy and Account Deletion systems integrated.
