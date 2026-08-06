import { callModelStudio } from "../services/aiClient.js";

export async function handleChat(req, res) {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "`messages` must be a non-empty array.",
      });
    }

    // Keep only valid chat messages
    const formattedMessages = messages
      .filter(
        (m) =>
          (m.role === "user" || m.role === "assistant") &&
          m.content?.trim()
      )
      .slice(-20); // Last 20 messages for context

    const { content } = await callModelStudio(formattedMessages);

    res.json({
      reply: content,
    });
  } catch (err) {
    console.error("[CHAT ERROR]", err);

    res.status(500).json({
      error: "Failed to generate AI response.",
    });
  }
}