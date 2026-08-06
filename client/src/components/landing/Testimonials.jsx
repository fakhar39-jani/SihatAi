import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";
import Badge from "../ui/Badge";

const TESTIMONIALS = [
  {
    quote:
      "It gave me clarity in a moment of panic — walked me through what to check and told me plainly when to see a doctor.",
    name: "Amara Malik",
    role: "Early Access User",
  },
  {
    quote:
      "The medication planner alone replaced three apps I was juggling. Clean, fast, and actually pleasant to use.",
    name: "Zain Raza",
    role: "Beta Tester",
  },
  {
    quote:
      "Feels like a private, patient friend who happens to know medicine — not a search engine dressed up as one.",
    name: "Sara Iqbal",
    role: "Early Access User",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-28 bg-[var(--color-surface)]/30 border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-xl mx-auto">
          <Badge>Voices</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Trusted by <span className="gold-gradient-text">early users</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-7"
            >
              <div className="flex gap-1 text-[var(--color-gold-2)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <HiStar key={idx} size={15} />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)]" />
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-faint)]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
