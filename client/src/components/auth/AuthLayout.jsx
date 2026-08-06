import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[var(--color-bg)]">
      {/* Left: form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 py-16">
        <Link to="/" className="flex items-center gap-2.5 mb-14">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
            <HiOutlineSparkles size={18} />
          </span>
          <span className="font-[var(--font-display)] text-[17px] font-bold text-white">
            MedGuide <span className="gold-gradient-text">AI</span>
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm mx-auto lg:mx-0"
        >
          <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
          <p className="mt-2.5 text-sm text-[var(--color-text-muted)]">{subtitle}</p>

          <div className="mt-9">{children}</div>

          {footer && <div className="mt-8 text-center lg:text-left text-sm text-[var(--color-text-muted)]">{footer}</div>}
        </motion.div>
      </div>

      {/* Right: ambient gold panel */}
      <div className="hidden lg:flex relative items-center justify-center bg-[var(--color-surface)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.18),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-[var(--radius-xl)] p-10 max-w-sm text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B] mb-6">
            <HiOutlineSparkles size={28} />
          </div>
          <blockquote className="text-lg font-medium text-white leading-relaxed">
            "Healthcare guidance that finally feels designed for people, not paperwork."
          </blockquote>
          <p className="mt-4 text-sm text-[var(--color-text-faint)]">— Jwand AI, Early Access</p>
        </motion.div>
      </div>
    </div>
  );
}
