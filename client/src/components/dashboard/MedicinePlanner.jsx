import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Card } from "../ui/Card";

const INITIAL = [
  { id: 1, name: "Vitamin D3", time: "8:00 AM", taken: true },
  { id: 2, name: "Amoxicillin 500mg", time: "1:00 PM", taken: false },
  { id: 3, name: "Cetirizine", time: "9:00 PM", taken: false },
];

export default function MedicinePlanner() {
  const [meds, setMeds] = useState(INITIAL);

  const toggle = (id) =>
    setMeds((prev) => prev.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m)));

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Medicine Planner</h3>
        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-gold-2)] hover:border-[var(--color-gold)] transition-colors">
          <HiOutlinePlus size={14} />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {meds.map((m) => (
          <label
            key={m.id}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={m.taken}
              onChange={() => toggle(m.id)}
              className="accent-[var(--color-gold)] h-4 w-4"
            />
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${m.taken ? "line-through text-[var(--color-text-faint)]" : "text-white"}`}>
                {m.name}
              </p>
              <p className="text-xs text-[var(--color-text-faint)]">{m.time}</p>
            </div>
          </label>
        ))}
      </div>
    </Card>
  );
}
