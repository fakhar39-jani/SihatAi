import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { Card } from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default function SymptomChecker() {
  const [form, setForm] = useState({
    symptoms: "",
    age: "",
    gender: "",
    duration: "",
    conditions: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const { data } = await axios.post(`${API_BASE}/symptom-check`, form);
      setResult(data);
    } catch {
      setResult({
        summary:
          "We couldn't reach the AI service right now. Please confirm the backend is running and try again — in the meantime, if symptoms are severe or worsening, seek medical attention.",
        possibleCauses: [],
        recommendation: "Try again shortly, or consult a healthcare professional directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <Card className="lg:col-span-2 h-fit">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.08)] border border-[var(--color-gold)]/20 text-[var(--color-gold-2)]">
            <HiOutlineClipboardDocumentCheck size={18} />
          </span>
          <h3 className="text-base font-semibold text-white">Tell us what's going on</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
              Symptoms
            </label>
            <textarea
              name="symptoms"
              required
              rows={4}
              value={form.symptoms}
              onChange={handleChange}
              placeholder="e.g. headache, mild fever, fatigue since yesterday..."
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-white placeholder:text-[var(--color-text-faint)] outline-none transition-colors focus:border-[var(--color-gold)] resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input id="age" name="age" type="number" min="0" label="Age" placeholder="24" value={form.age} onChange={handleChange} required />
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-white outline-none focus:border-[var(--color-gold)]"
              >
                <option value="">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <Input
            id="duration"
            name="duration"
            label="Duration"
            placeholder="e.g. 2 days"
            value={form.duration}
            onChange={handleChange}
            required
          />

          <Input
            id="conditions"
            name="conditions"
            label="Existing medical conditions (optional)"
            placeholder="e.g. asthma, diabetes"
            value={form.conditions}
            onChange={handleChange}
          />

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Symptoms"}
          </Button>
        </form>
      </Card>

      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="h-64 flex flex-col items-center justify-center text-center">
                <div className="h-10 w-10 rounded-full border-2 border-[var(--color-gold)] border-t-transparent animate-spin" />
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">Analyzing your symptoms...</p>
              </Card>
            </motion.div>
          )}

          {!loading && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5"
            >
              <Card>
                <h4 className="text-sm font-semibold text-[var(--color-gold-2)] mb-3">AI Assessment</h4>
                <p className="text-sm leading-relaxed text-white">{result.summary}</p>
              </Card>

              {result.possibleCauses?.length > 0 && (
                <Card>
                  <h4 className="text-sm font-semibold text-white mb-4">Possible Causes</h4>
                  <div className="space-y-3">
                    {result.possibleCauses.map((cause) => (
                      <div key={cause.name} className="flex items-center justify-between">
                        <span className="text-sm text-[var(--color-text-muted)]">{cause.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-2)]"
                              style={{ width: `${cause.likelihood}%` }}
                            />
                          </div>
                          <span className="text-xs text-[var(--color-text-faint)] w-9">{cause.likelihood}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              <Card className="border-[var(--color-gold)]/25 bg-[rgba(212,175,55,0.05)]">
                <h4 className="text-sm font-semibold text-white mb-2">Recommendation</h4>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{result.recommendation}</p>
              </Card>
            </motion.div>
          )}

          {!loading && !result && (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card className="h-64 flex flex-col items-center justify-center text-center">
                <HiOutlineClipboardDocumentCheck size={32} className="text-[var(--color-text-faint)]" />
                <p className="mt-4 text-sm text-[var(--color-text-faint)] max-w-xs">
                  Fill in the form to receive your AI-powered symptom assessment.
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
