# Jwand AI

Healthcare, powered by artificial intelligence — an AI symptom checker, health chat, medication planner, and dashboard, built for the **Alibaba Cloud AI Hackathon** and **Bano Qabil AI Hackathon**.

## Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, React Router, Framer Motion, Recharts, React Icons, Axios
- **Backend:** Node.js, Express
- **Database / Auth:** Firebase Firestore + Firebase Authentication
- **AI:** Alibaba Cloud Model Studio (DashScope, OpenAI-compatible endpoint)

## Project structure

```
medguide-ai/
├── client/     React app (landing, auth, dashboard, chat, symptom checker)
└── server/     Express API (AI proxy — keeps your API key off the browser)
```

## Getting started

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# paste your Alibaba Cloud Model Studio API key into MODEL_STUDIO_API_KEY
npm run dev
```

Runs on `http://localhost:5000`. Without an API key set, it still runs in a labeled **demo mode** with canned responses so the app stays fully demoable.

### 2. Frontend

```bash
cd client
npm install
cp .env.example .env.local
# optionally paste your Firebase project config
npm run dev
```

Runs on `http://localhost:5173`. Without Firebase keys, auth pages render fine but sign-in/sign-up calls will fail gracefully — add your Firebase config to enable real accounts.

## Getting API keys (free tier)

- **Alibaba Cloud Model Studio:** console.alibabacloud.com → Model Studio → create an API key. New accounts get free trial credits.
- **Firebase:** console.firebase.google.com → create a project → enable Email/Password Authentication and Firestore → copy the web config into `client/.env.local`.

## Deployment (free)

- **Frontend:** Vercel or Firebase Hosting (`vite build` → deploy `client/dist`)
- **Backend:** Render, Railway, or Fly.io free tier (Node/Express)

## Notes

- All AI calls run server-side through `server/src/services/aiClient.js` — the frontend never sees your Model Studio key.
- The symptom checker asks the model for structured JSON; if parsing fails, it degrades to a plain-text summary instead of breaking the UI.
- Not a medical device — Jwand AI provides general information only, not diagnosis or treatment.
