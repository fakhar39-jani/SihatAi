import { Router } from "express";
import { handleChat } from "../controllers/chatController.js";
import { handleSymptomCheck } from "../controllers/symptomController.js";

const router = Router();

router.post("/chat", handleChat);
router.post("/symptom-check", handleSymptomCheck);

router.get("/health", (req, res) => res.json({ status: "ok", service: "medguide-ai-server" }));

export default router;
