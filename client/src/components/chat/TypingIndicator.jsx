import { HiOutlineSparkles } from "react-icons/hi2";

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
        <HiOutlineSparkles size={14} />
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-[rgba(212,175,55,0.06)] border border-[var(--color-gold)]/20 px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-2)] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
