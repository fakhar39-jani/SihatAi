import { motion } from "framer-motion";
import { HiOutlinePencilSquare, HiOutlineCpuChip, HiOutlineHeart } from "react-icons/hi2";
import Badge from "../ui/Badge";

const STEPS = [
  {
    icon: HiOutlinePencilSquare,
    title: "Input Symptoms",
    desc: "Tell MedGuide what you're experiencing — in your own words, no medical jargon needed.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI Analyzes",
    desc: "Our model cross-references your input against clinical patterns to build a clear picture.",
  },
  {
    icon: HiOutlineHeart,
    title: "Receive Guidance",
    desc: "Get a structured recommendation — what it could be, and what to do about it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-28 bg-[var(--color-surface)]/30 border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-xl mx-auto">
          <Badge>Process</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            How it <span className="gold-gradient-text">works</span>
          </h2>
        </div>

        <div className="relative mt-20 grid sm:grid-cols-3 gap-10">
          <div className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-gold)] text-[var(--color-gold-2)]">
                <step.icon size={24} />
              </div>
              <div className="mt-6 text-xs font-semibold tracking-widest text-[var(--color-gold-2)]">
                STEP {i + 1}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-muted)] max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
