import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Badge from "../ui/Badge";

const FAQS = [
  {
    q: "Is Jwand AI a replacement for a doctor?",
    a: "No. Jwand AI gives general, informational guidance to help you understand your symptoms and decide on next steps. It's not a substitute for professional diagnosis or treatment.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. Your data is stored securely and never sold or shared with third parties. You control your data and can delete it at any time from Settings.",
  },
  {
    q: "What happens in an emergency?",
    a: "If MedGuide detects language suggesting a medical emergency, it will immediately direct you to contact local emergency services rather than continue the conversation.",
  },
  {
    q: "Is Jwand AI free to use?",
    a: "Yes, Jwand AI is completely free during this preview, built for the Alibaba Cloud AI Hackathon and Bano Qabil AI Hackathon.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Badge>FAQ</Badge>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Questions, <span className="gold-gradient-text">answered</span>
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => (
            <div key={item.q} className="card-premium overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium text-white">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <HiOutlineChevronDown className="text-[var(--color-gold-2)]" size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
