import { callModelStudio } from "../services/aiClient.js";

const STRUCTURED_INSTRUCTIONS = `
Respond ONLY with strict JSON (no markdown, no prose outside the JSON) matching this shape:
{
  "summary": "2-3 sentence plain-language assessment",
  "possibleCauses": [{ "name": "string", "likelihood": number (0-100) }],
  "recommendation": "1-2 sentence clear next step"
}
List at most 3 possibleCauses, ordered by likelihood descending. Likelihoods do not need to sum to 100.
`;

export async function handleSymptomCheck(req, res) {
  try {
    const { symptoms, age, gender, duration, conditions } = req.body;

    if (!symptoms || !age || !gender || !duration) {
      return res.status(400).json({ error: "symptoms, age, gender, and duration are required." });
    }

    const userPrompt = `Patient details:
- Symptoms: ${symptoms}
- Age: ${age}
- Gender: ${gender}
- Duration: ${duration}
- Existing conditions: ${conditions || "None reported"}

${STRUCTURED_INSTRUCTIONS}`;

    const { content, offline } = await callModelStudio([{ role: "user", content: userPrompt }]);

    if (offline) {
      return res.json({
        summary: content,
        possibleCauses: [
          { name: "Common viral illness", likelihood: 55 },
          { name: "Stress or fatigue related", likelihood: 30 },
        ],
        recommendation:
          "Monitor symptoms over the next 24-48 hours and consult a doctor if they worsen or persist.",
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      // If the model didn't return clean JSON, degrade gracefully to a summary-only response.
      parsed = { summary: content, possibleCauses: [], recommendation: "Please consult a healthcare professional for a full evaluation." };
    }

    res.json(parsed);
  } catch (err) {
    console.error("[symptom-check] error:", err.message);
    res.status(500).json({ error: "Something went wrong analyzing symptoms." });
  }
}
