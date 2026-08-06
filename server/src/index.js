import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import apiRouter from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json({ limit: "1mb" }));

// Basic abuse protection on the AI endpoints — free tier friendly.
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: "Too many requests — please slow down." },
});
app.use("/api/chat", limiter);
app.use("/api/symptom-check", limiter);

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Jwand AI API is running.");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Jwand AI server listening on http://localhost:${PORT}`);
});
