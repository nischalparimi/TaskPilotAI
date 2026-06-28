# 🚀 TaskPilot AI

An AI-powered productivity assistant that helps users organize tasks, generate smart productivity plans, track progress, and manage deadlines efficiently.

## 🌐 Live Demo

**Frontend:** https://task-pilot-ai-steel.vercel.app

**Backend:** https://taskpilotai-backend-zl8q.onrender.com

## 📂 GitHub Repository

https://github.com/nischalparimi/TaskPilotAI

---

# 📖 Project Overview

TaskPilot AI is a full-stack web application designed to improve personal productivity using Artificial Intelligence. Users can securely sign in with Google, create tasks, receive AI-generated productivity plans, interact with an AI assistant, visualize task progress through analytics, and organize deadlines using a calendar.

---

# ✨ Features

* 🔐 Google Authentication using Firebase
* ✅ Add, Edit and Delete Tasks
* 🤖 AI Productivity Plan Generator (Gemini AI)
* 💬 AI Assistant Chat
* 📊 Analytics Dashboard
* 📅 Calendar View
* 🔍 Search Tasks
* 📄 Export Tasks to PDF
* 🌙 Dark Mode
* 📱 Responsive Design

---

# 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Recharts
* React Big Calendar

### Backend

* FastAPI
* Python
* Google Gemini 2.5 Flash API

### Database & Authentication

* Firebase Authentication
* Firebase Firestore

### Deployment

* Vercel (Frontend)
* Render (Backend)
* GitHub

---

# 📁 Project Structure

```
TaskPilotAI
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── main.py
│   ├── gemini_service.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/nischalparimi/TaskPilotAI.git
cd TaskPilotAI
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 📸 Screenshots

Add screenshots of:

* Login Page
* Dashboard
* AI Planner
* AI Assistant
* Analytics
* Calendar

---

# 🔄 System Architecture

```
User
   │
   ▼
React Frontend (Vercel)
   │
   ▼
FastAPI Backend (Render)
   │
   ├── Gemini AI
   └── Firebase Firestore
```

---

# 🚀 Future Enhancements

* Email Reminders
* Push Notifications
* Team Collaboration
* Voice AI Assistant
* Mobile Application
* Weekly Productivity Reports
* AI Task Prioritization

---

# 👨‍💻 Developer

**Parimi Nischal**

B.Tech – Computer Science & Engineering

GitHub: https://github.com/nischalparimi

---

# 📄 License

This project was developed for learning and hackathon purposes.
