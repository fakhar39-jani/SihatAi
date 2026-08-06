import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

export default function Topbar({ title }) {
  const { user } = useAuth();
  const initials = (user?.displayName || "Guest User")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl px-6 lg:px-8 h-[72px]">
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-faint)] w-64">
          <HiOutlineSearch size={16} />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none w-full placeholder:text-[var(--color-text-faint)] text-white"
          />
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white transition-colors">
          <HiOutlineBell size={18} />
          <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-xs font-bold text-[#0B0B0B]">
          {initials || "GU"}
        </div>
      </div>
    </header>
  );
}
