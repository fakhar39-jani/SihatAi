import { useState } from "react";
import { Card } from "../components/ui/Card";

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        checked ? "bg-[var(--color-gold)]" : "bg-[var(--color-border)]"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English");
  const [notifs, setNotifs] = useState({
    medication: true,
    appointments: true,
    aiInsights: false,
  });

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <h3 className="text-sm font-semibold text-white mb-5">Appearance</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white">Theme</p>
            <p className="text-xs text-[var(--color-text-faint)] mt-0.5">MedGuide is designed for dark mode.</p>
          </div>
          <div className="flex rounded-full border border-[var(--color-border)] p-1">
            {["dark", "light"].map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                  theme === t ? "bg-[var(--color-gold)] text-[#0B0B0B]" : "text-[var(--color-text-muted)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-semibold text-white mb-5">Notifications</h3>
        <div className="space-y-4">
          {[
            { key: "medication", label: "Medication reminders" },
            { key: "appointments", label: "Appointment alerts" },
            { key: "aiInsights", label: "Weekly AI health insights" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
              <Toggle
                checked={notifs[item.key]}
                onChange={(v) => setNotifs({ ...notifs, [item.key]: v })}
              />
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-semibold text-white mb-5">Language</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-white outline-none focus:border-[var(--color-gold)]"
        >
          <option>English</option>
          <option>Urdu</option>
          <option>Arabic</option>
        </select>
      </Card>
    </div>
  );
}
