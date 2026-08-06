import { NavLink } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  HiOutlineViewGrid,
  HiOutlineChatAlt2,
  HiOutlineClipboardCheck,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineCalendar,
} from "react-icons/hi";

const NAV = [
  { label: "Overview", to: "/dashboard", icon: HiOutlineViewGrid, end: true },
  { label: "AI Chat", to: "/chat", icon: HiOutlineChatAlt2 },
  { label: "Symptom Checker", to: "/symptom-checker", icon: HiOutlineClipboardCheck },
  { label: "Appointments", to: "/dashboard/appointments", icon: HiOutlineCalendar },
  { label: "Health History", to: "/dashboard/history", icon: HiOutlineClock },
  { label: "Profile", to: "/profile", icon: HiOutlineUser },
  { label: "Settings", to: "/settings", icon: HiOutlineCog },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-6">
      <div className="flex items-center gap-2.5 px-2 mb-10">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
          <HiOutlineSparkles size={18} />
        </span>
        <span className="font-[var(--font-display)] text-[16px] font-bold text-white">
          MedGuide <span className="gold-gradient-text">AI</span>
        </span>
      </div>

      <nav className="flex flex-col gap-1">
        {NAV.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[rgba(212,175,55,0.1)] text-[var(--color-gold-2)] border border-[var(--color-gold)]/25"
                  : "text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]"
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-[var(--color-gold)]/20 bg-[rgba(212,175,55,0.05)] p-4">
        <p className="text-xs font-medium text-[var(--color-gold-2)]">Hackathon Preview</p>
        <p className="mt-1 text-xs text-[var(--color-text-faint)] leading-relaxed">
          All features free during the Alibaba Cloud & Bano Qabil hackathons.
        </p>
      </div>
    </aside>
  );
}
