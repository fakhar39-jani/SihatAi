import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import Badge from "../ui/Badge";

const FULL_TEXT =
  "Based on what you've described — a mild headache with light sensitivity for 2 days — this pattern is often consistent with tension-type headache or migraine. I'd recommend rest, hydration, and monitoring for fever...";

export default function AIPreview() {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setTyped(FULL_TEXT.slice(0, i));
      i += 2;
      if (i > FULL_TEXT.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section id="ai-preview" className="px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>Live Preview</Badge>
        <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Talk to <span className="gold-gradient-text">Jwand AI</span>
        </h2>
        <p className="mt-5 text-[var(--color-text-muted)] text-lg max-w-lg mx-auto">
          A conversational interface that feels less like a form, and more like talking to someone who listens.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setStarted(true)}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 max-w-2xl glass rounded-[var(--radius-xl)] p-2"
      >
        <div className="rounded-[calc(var(--radius-xl)-6px)] bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[var(--color-border)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
              <HiOutlineSparkles size={13} />
            </span>
            <span className="text-sm font-medium text-white">Jwand AI</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-[var(--color-success)]" />
          </div>

          <div className="p-6 space-y-4 min-h-[220px]">
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-3 text-sm text-white">
                I've had a headache and light sensitivity for 2 days, what could it be?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[rgba(212,175,55,0.06)] border border-[var(--color-gold)]/20 px-4 py-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {typed}
                <span className="inline-block w-1.5 h-4 ml-0.5 bg-[var(--color-gold-2)] animate-pulse align-middle" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
