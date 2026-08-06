import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import { cn } from "../../lib/utils";

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}
    >
      {!isUser && (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
          <HiOutlineSparkles size={14} />
        </span>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-[var(--color-surface-2)] border border-[var(--color-border)] text-white rounded-tr-sm"
            : "bg-[rgba(212,175,55,0.06)] border border-[var(--color-gold)]/20 text-[var(--color-text-muted)] rounded-tl-sm"
        )}
      >
        {content}
      </div>
    </motion.div>
  );
}
