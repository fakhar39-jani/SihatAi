import { HiOutlineClipboardCheck, HiOutlineChatAlt2, HiOutlineCalendar } from "react-icons/hi";

const HISTORY = [
  { icon: HiOutlineChatAlt2, title: "AI Chat: Persistent headache", date: "Aug 3, 2026" },
  { icon: HiOutlineClipboardCheck, title: "Symptom Check: Seasonal allergies", date: "Jul 30, 2026" },
  { icon: HiOutlineCalendar, title: "Appointment completed with Dr. Ahmed", date: "Jul 22, 2026" },
  { icon: HiOutlineClipboardCheck, title: "Symptom Check: Mild fever", date: "Jul 15, 2026" },
];

export default function HealthHistory() {
  return (
    <div className="max-w-2xl">
      <div className="relative pl-8 space-y-8">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
        {HISTORY.map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-8 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-gold)]/30 text-[var(--color-gold-2)]">
              <item.icon size={15} />
            </span>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="text-xs text-[var(--color-text-faint)] mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
