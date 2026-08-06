import { Card } from "../ui/Card";

export default function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.08)] border border-[var(--color-gold)]/20 text-[var(--color-gold-2)]">
          <Icon size={18} />
        </span>
        <div>
          <p className="text-xs text-[var(--color-text-faint)]">{label}</p>
          <p className="text-xl font-bold text-white">{value}</p>
        </div>
      </div>
      {hint && <p className="mt-3 text-xs text-[var(--color-text-faint)]">{hint}</p>}
    </Card>
  );
}
