<div align="center">

# 🎙️ InterviewIQ.AI

### An AI-powered mock interview platform with voice interviewer, resume-based questions, instant scoring, and PDF reports

[**🌐 Live Demo**](https://ai-interview-mern-1.onrender.com/) · [**🐛 Report Bug**](https://github.com/rohit-codec/AI-interview-Mern-/issues) · [**✨ Request Feature**](https://github.com/rohit-codec/AI-interview-Mern-/issues)

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?logo=firebase&logoColor=black)
![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?logo=razorpay&logoColor=white)
![Render](https://img.shields.io/badge/Hosted_on-Render-46E3B7?logo=render&logoColor=black)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Data Models](#-data-models)
- [Credits & Pricing](#-credits--pricing)
- [Deployment Notes](#-deployment-notes)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About

**InterviewIQ.AI** helps candidates practice interviews in a realistic setting. Upload your resume or enter your target role, pick **Technical** or **HR** mode, and an AI interviewer asks you five questions out loud. You answer by speaking, each answer is scored by AI, and you get a detailed performance report you can download as a PDF.

---

## ✨ Features

- 🔐 **Google Sign-In** via Firebase, with sessions kept in an HTTP-only JWT cookie
- 📄 **Resume analysis:** upload a PDF; text is extracted and AI pulls out your role, experience, projects, and skills
- 🧠 **Personalized questions:** 5 questions per interview, based on role, experience, mode, projects, and resume
- 📈 **Progressive difficulty:** easy → easy → medium → medium → hard, with time limits of 60 / 60 / 90 / 90 / 120 seconds
- 🗣️ **Voice interview:** the AI interviewer speaks questions using the browser's Speech Synthesis (male/female avatar videos), and your spoken answers are captured with Speech Recognition
- ⏱️ **Live countdown timer** per question; late or empty answers score 0
- 🤖 **AI scoring:** each answer is rated 0 to 10 on *confidence*, *communication*, and *correctness*, with short feedback
- 📊 **Performance report:** overall score, averages, and question-wise breakdown with charts
- 📥 **PDF export** of your interview report
- 🕘 **Interview history** to revisit past reports
- 💳 **Credit system with Razorpay** payments and server-side signature verification

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 19, Vite, React Router v7, Redux Toolkit, Tailwind CSS v4, Motion, Recharts, react-circular-progressbar, jsPDF + autoTable, React Icons |
| **Backend** | Node.js, Express 5, Mongoose, Multer, cookie-parser, CORS |
| **Database** | MongoDB |
| **AI** | OpenRouter API (`openai/gpt-4o-mini`) |
| **Auth** | Firebase Google Auth, JWT in cookies |
| **Payments** | Razorpay |
| **PDF parsing** | pdfjs-dist |
| **Hosting** | Render |

---

## 🔄 How It Works

```
1. Sign in with Google  ─►  Firebase  ─►  server issues JWT cookie
2. Set up interview     ─►  (optional) upload resume PDF ─► text extracted ─► AI parses role/skills/projects
3. Generate questions   ─►  AI creates 5 questions  ─►  50 credits deducted
4. Take interview       ─►  AI speaks question ─► you answer by voice ─► timer enforced
5. Evaluate             ─►  AI scores confidence / communication / correctness + feedback
6. Finish               ─►  averages computed ─► report with charts ─► download PDF
```

---

## 📁 Project Structure

```
AI-interview-Mern-/
├── client/                         # React + Vite frontend
│   └── src/
│       ├── components/             # Navbar, Footer, Timer, Step1SetUp,
│       │                           # Step2Interview, Step3Report, AuthModel
│       ├── pages/                  # Home, Auth, InterviewPage,
│       │                           # InterviewHistory, InterviewReport, Pricing
│       ├── redux/                  # store + userSlice
│       ├── utils/firebase.js       # Firebase config
│       └── assets/                 # images and AI interviewer videos
└── server/                         # Express backend
    ├── config/                     # DB connection, token helper
    ├── controllers/                # auth, user, interview, payment
    ├── middlewares/                # isAuth (JWT cookie), multer (PDF upload)
    ├── models/                     # User, Interview, Payment
    ├── routes/                     # auth, user, interview, payment
    ├── services/                   # openRouter.service, razorpay.service
    └── index.js                    # entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) cluster (or local MongoDB)
- A [Firebase](https://console.firebase.google.com/) project with **Google sign-in** enabled
- An [OpenRouter](https://openrouter.ai/) API key
- A [Razorpay](https://razorpay.com/) account (test keys work fine)
- Google Chrome recommended (voice recognition uses `webkitSpeechRecognition`)

### 1. Clone the repository

```bash
git clone https://github.com/rohit-codec/AI-interview-Mern-.git
cd AI-interview-Mern-
```

### 2. Backend setup

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_string
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the server:

```bash
npm run dev
```

### 3. Frontend setup

```bash
cd ../client
npm install
```

Create `client/.env`:

```env
VITE_FIREBASE_APIKEY=your_firebase_web_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Update the Firebase project values in `client/src/utils/firebase.js` to your own project, then start the app:

```bash
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend (Vite) | http://localhost:5173 |
| Backend (Express) | http://localhost:8000 |

> ⚠️ Never commit `.env` files. Add `.env` to `.gitignore` in both `client/` and `server/`.

---

## 🔌 API Reference

Base URL: `http://localhost:8000/api`. All 🔑 routes require the auth cookie.

### Auth

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/auth/google` | 🔓 | Sign in or sign up with Google, sets JWT cookie |
| `GET` | `/auth/logout` | 🔓 | Clear the auth cookie |

### User

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/user/current-user` | 🔑 | Get the logged-in user (with credits) |

### Interview

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/interview/resume` | 🔑 | Upload a PDF resume (max 5 MB); returns role, experience, projects, skills |
| `POST` | `/interview/generate-questions` | 🔑 | Create an interview with 5 questions (costs 50 credits) |
| `POST` | `/interview/submit-answer` | 🔑 | Submit and score an answer |
| `POST` | `/interview/finish` | 🔑 | Finalize the interview and compute averages |
| `GET` | `/interview/get-interview` | 🔑 | List your past interviews |
| `GET` | `/interview/report/:id` | 🔑 | Get a detailed interview report |

### Payment

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/payment/order` | 🔑 | Create a Razorpay order |
| `POST` | `/payment/verify` | 🔑 | Verify payment signature and add credits |

---

## 🗄️ Data Models

| Model | Key Fields |
|-------|-----------|
| **User** | `name`, `email` (unique), `credits` (default 100) |
| **Interview** | `userId`, `role`, `experience`, `mode` (`HR` \| `Technical`), `resumeText`, `questions[]`, `finalScore`, `status` |
| **Question** *(embedded)* | `question`, `difficulty`, `timeLimit`, `answer`, `feedback`, `score`, `confidence`, `communication`, `correctness` |
| **Payment** | `userId`, `planId`, `amount`, `credits`, `razorpayOrderId`, `razorpayPaymentId`, `status` (`created` \| `paid` \| `failed`) |

---

## 💳 Credits & Pricing

Each interview costs **50 credits**. New users start with **100 free credits**.

| Plan | Price | Credits |
|------|-------|---------|
| Free | ₹0 | 100 |
| Starter Pack | ₹100 | 150 |
| Pro Pack | ₹500 | 650 |

Payments are signed and verified with HMAC-SHA256 on the server before credits are added, and repeat verifications are ignored.

---

## ☁️ Deployment Notes

- **Live app:** https://ai-interview-mern-1.onrender.com/
- Set the same environment variables on your hosting dashboard.
- For production, update these hardcoded values:
  - `ServerUrl` in `client/src/App.jsx` (currently `http://localhost:8000`). Prefer `import.meta.env.VITE_SERVER_URL`.
  - The CORS `origin` in `server/index.js` (currently `http://localhost:5173`) should be your deployed frontend URL.
  - Set the auth cookie to `secure: true` (and `sameSite: "none"` if frontend and backend are on different domains).
- Add your deployed domain to **Firebase → Authentication → Authorized domains**.
- Render's free tier may sleep when idle, so the first load can take a short while.

---

## 🛣️ Roadmap

- [ ] Support for more interview types and custom question counts
- [ ] Safer JSON parsing and retries for AI responses
- [ ] Atomic credit deduction and failed-payment handling
- [ ] Download or replay of recorded answers
- [ ] Firefox/Safari fallback for voice input
- [ ] Rate limiting on AI endpoints

---

## 🤝 Contributing

1. Fork the project
2. Create a branch: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m "Add amazing feature"`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👤 Author

**Rohit** · GitHub: [@rohit-codec](https://github.com/rohit-codec)

If you found this project useful, please consider giving it a ⭐!
