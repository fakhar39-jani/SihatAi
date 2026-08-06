import { HiOutlineCalendar, HiOutlinePlus } from "react-icons/hi";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";

const APPOINTMENTS = [
  { doctor: "Dr. Ahmed Raza", specialty: "General Physician", date: "Aug 12, 2026", time: "10:30 AM", status: "Confirmed" },
  { doctor: "Dr. Sana Malik", specialty: "Dermatologist", date: "Aug 20, 2026", time: "2:00 PM", status: "Pending" },
];

export default function Appointments() {
  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">Manage your upcoming visits.</p>
        <Button size="sm">
          <HiOutlinePlus size={14} />
          Book Appointment
        </Button>
      </div>

      <div className="space-y-4">
        {APPOINTMENTS.map((a) => (
          <Card key={a.doctor} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.08)] border border-[var(--color-gold)]/20 text-[var(--color-gold-2)]">
              <HiOutlineCalendar size={20} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">{a.doctor}</p>
              <p className="text-xs text-[var(--color-text-faint)] mt-0.5">{a.specialty}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white">{a.date}</p>
              <p className="text-xs text-[var(--color-text-faint)]">{a.time}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium ${
                a.status === "Confirmed"
                  ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                  : "bg-[var(--color-gold)]/10 text-[var(--color-gold-2)]"
              }`}
            >
              {a.status}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
