import { motion } from "framer-motion";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCalendarDays,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import Badge from "../ui/Badge";

const FEATURES = [
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "AI Symptom Checker",
    desc: "Describe what you're feeling and receive a structured, evidence-informed assessment in seconds.",
  },
  {
    icon: HiOutlineCalendarDays,
    title: "Medication Planner",
    desc: "Track doses, set reminders, and keep a clear timeline of everything you're taking.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "AI Health Chat",
    desc: "Ask follow-up questions in plain language and get grounded, conversational guidance.",
  },
  {
    icon: HiOutlineBookOpen,
    title: "Disease Information",
    desc: "Clear, reliable explanations of conditions — causes, symptoms, and what typically helps.",
  },
  {
    icon: HiOutlineClock,
    title: "Health Timeline",
    desc: "A private, chronological record of your symptoms, conversations, and check-ins.",
  },
  {
    icon: HiOutlineExclamationTriangle,
    title: "Emergency Guidance",
    desc: "Instant clarity on when something needs urgent attention — and what to do next.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <Badge>Platform</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Everything you need to <span className="gold-gradient-text">understand your health</span>
          </h2>
          <p className="mt-5 text-[var(--color-text-muted)] text-lg">
            Six focused tools, one intelligent system, built around how people actually experience healthcare.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="card-premium p-7 group transition-colors hover:border-[var(--color-gold)]/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(212,175,55,0.08)] border border-[var(--color-gold)]/20 text-[var(--color-gold-2)] transition-transform duration-300 group-hover:scale-110">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
