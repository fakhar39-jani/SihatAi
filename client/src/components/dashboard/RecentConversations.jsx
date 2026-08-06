import { Link } from "react-router-dom";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Card } from "../ui/Card";

const CONVERSATIONS = [
  { topic: "Persistent headache, 2 days", time: "2 hours ago", tag: "Follow-up needed" },
  { topic: "Medication interaction check", time: "Yesterday", tag: "Resolved" },
  { topic: "Seasonal allergy symptoms", time: "3 days ago", tag: "Resolved" },
];

export default function RecentConversations() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Recent Conversations</h3>
        <Link to="/chat" className="text-xs text-[var(--color-gold-2)] hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-5 space-y-4">
        {CONVERSATIONS.map((c) => (
          <div key={c.topic} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-gold-2)]">
              <HiOutlineChatAlt2 size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-white truncate">{c.topic}</p>
              <p className="text-xs text-[var(--color-text-faint)] mt-0.5">{c.time}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                c.tag === "Resolved"
                  ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                  : "bg-[var(--color-gold)]/10 text-[var(--color-gold-2)]"
              }`}
            >
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
