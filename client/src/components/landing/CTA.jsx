import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-gold)]/25 bg-[var(--color-surface)] px-8 py-16 text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]" />
        <h2 className="relative text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Your health, <span className="gold-gradient-text">clearly understood.</span>
        </h2>
        <p className="relative mt-5 text-[var(--color-text-muted)] text-lg max-w-md mx-auto">
          Join Jwand AI today and get guidance built around you — free, private, and always available.
        </p>
        <div className="relative mt-9">
          <Button as={Link} to="/signup" size="lg" className="group">
            Get Started Free
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
