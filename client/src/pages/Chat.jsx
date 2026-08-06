import { useEffect, useRef, useState } from "react";
import { HiOutlinePaperAirplane, HiOutlineSparkles } from "react-icons/hi2";
import axios from "axios";
import MessageBubble from "../components/chat/MessageBubble";
import TypingIndicator from "../components/chat/TypingIndicator";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const SUGGESTIONS = [
  "I've had a sore throat for 3 days",
  "What can I take for a mild fever?",
  "Explain what causes migraines",
];

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm Jwand AI. Tell me what you're experiencing and I'll help you understand it. Remember, this isn't a substitute for professional medical care.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (text) => {
    const message = text ?? input;

    if (!message.trim() || loading) return;

    const nextMessages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      console.log("API BASE:", API_BASE);
      console.log("Sending request to:", `${API_BASE}/chat`);

      const { data } = await axios.post(`${API_BASE}/chat`, {
        messages: nextMessages,
      });

      console.log("Server Response:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      console.error("========== CHAT ERROR ==========");
      console.error(err);

      if (err.response) {
        console.error("Status:", err.response.status);
        console.error("Response:", err.response.data);
        console.error("URL:", err.config?.url);
      } else if (err.request) {
        console.error("No response received.");
        console.error(err.request);
      } else {
        console.error("Request setup error:", err.message);
      }

      console.error("================================");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble reaching the AI service right now. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-72px-64px)]">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-1 py-2 space-y-5"
      >
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}

        {loading && <TypingIndicator />}

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs text-[var(--color-text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-2)] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 pl-4"
      >
        <HiOutlineSparkles
          className="text-[var(--color-gold-2)] shrink-0"
          size={18}
        />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms..."
          className="flex-1 bg-transparent text-sm text-white placeholder:text-[var(--color-text-faint)] outline-none py-2.5"
        />

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="btn-gold flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-40"
        >
          <HiOutlinePaperAirplane size={16} />
        </button>
      </form>
    </div>
  );
}