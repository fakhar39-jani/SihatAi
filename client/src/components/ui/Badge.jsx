import { cn } from "../../lib/utils";

export default function Badge({ children, className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--color-text-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
