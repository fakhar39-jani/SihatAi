import { motion } from "framer-motion";

const STATS = [
  { value: "50K+", label: "Symptoms Analyzed" },
  { value: "99.2%", label: "Uptime Reliability" },
  { value: "24/7", label: "AI Availability" },
  { value: "4.9/5", label: "User Satisfaction" },
];

export default function Stats() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold gold-gradient-text font-[var(--font-display)]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
