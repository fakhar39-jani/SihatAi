import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { Card } from "../ui/Card";

const DATA = [
  { day: "Mon", score: 78 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 88 },
  { day: "Fri", score: 84 },
  { day: "Sat", score: 90 },
  { day: "Sun", score: 86 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2 text-xs">
      <p className="text-[var(--color-text-faint)]">{label}</p>
      <p className="font-semibold text-[var(--color-gold-2)]">{payload[0].value}</p>
    </div>
  );
}

export default function HealthScoreChart() {
  return (
    <Card className="col-span-2">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[var(--color-text-muted)]">Health Score</p>
          <p className="mt-1 text-3xl font-bold gold-gradient-text">86 / 100</p>
        </div>
        <span className="rounded-full border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
          +8% this week
        </span>
      </div>

      <div className="mt-6 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DATA} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#757575", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#D4AF37"
              strokeWidth={2}
              fill="url(#goldFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
