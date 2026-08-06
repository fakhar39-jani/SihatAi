import { cn } from "../../lib/utils";

export default function Input({ label, id, className, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-white placeholder:text-[var(--color-text-faint)] outline-none transition-colors focus:border-[var(--color-gold)]",
          className
        )}
        {...props}
      />
    </div>
  );
}
