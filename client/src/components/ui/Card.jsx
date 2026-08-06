import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("card-premium p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function GlassCard({ className, children, ...props }) {
  return (
    <div className={cn("glass rounded-[var(--radius-lg)] p-6", className)} {...props}>
      {children}
    </div>
  );
}
