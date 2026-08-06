import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlinePlay } from "react-icons/hi2";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 px-6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,11,11,0.9))]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            AI Symptom Intelligence, Refined
          </Badge>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-8 text-5xl sm:text-6xl lg:text-[74px] font-extrabold leading-[1.05] tracking-tight text-white"
        >
          Healthcare,
          <br />
          <span className="gold-gradient-text">Powered by Artificial Intelligence.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
        >
          Understand your symptoms, plan your medications, and get clear guidance —
          from an AI built for precision, privacy, and peace of mind.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button as={Link} to="/signup" size="lg" className="group">
            Get Started Free
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button as="a" href="#ai-preview" variant="outline" size="lg">
            <HiOutlinePlay />
            See It In Action
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="mt-8 text-xs text-[var(--color-text-faint)]"
        >
          No credit card required · Free during hackathon preview
        </motion.div>
      </div>

      {/* Illustration: layered glass panel mock of the product */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-20 max-w-4xl"
      >
        <div className="glass rounded-[var(--radius-xl)] p-3 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">
          <div className="rounded-[calc(var(--radius-xl)-8px)] bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--color-border)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
              <span className="ml-3 text-xs text-[var(--color-text-faint)]">Jwand AI — Symptom Analysis</span>
            </div>
            <div className="p-8 grid sm:grid-cols-3 gap-4 text-left">
              <div className="sm:col-span-2 space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-[var(--color-border)]" />
                <div className="h-3 w-1/2 rounded-full bg-[var(--color-border)]" />
                <div className="mt-5 rounded-xl border border-[var(--color-gold)]/30 bg-[rgba(212,175,55,0.06)] p-4">
                  <div className="text-xs font-semibold text-[var(--color-gold-2)] mb-2">AI Assessment</div>
                  <div className="h-2.5 w-full rounded-full bg-white/10 mb-2" />
                  <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[var(--color-text-faint)] mb-2">Health Score</div>
                  <div className="text-3xl font-bold gold-gradient-text">86</div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 mt-4 overflow-hidden">
                  <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-2)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
