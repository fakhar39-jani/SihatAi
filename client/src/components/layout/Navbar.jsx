import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/#features" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B] transition-transform duration-300 group-hover:scale-105">
            <HiOutlineSparkles size={18} />
          </span>
          <span className="font-[var(--font-display)] text-[17px] font-bold tracking-tight text-white">
            MedGuide <span className="gold-gradient-text">AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/login" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-white transition-colors px-3">
            Sign In
          </NavLink>
          <Button as={Link} to="/signup" size="sm">
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0B0B0B] border-t border-[var(--color-border)]"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[15px] font-medium text-[var(--color-text-muted)] hover:text-white border-b border-[var(--color-border)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-5">
                <Button as={Link} to="/login" variant="outline" size="sm">
                  Sign In
                </Button>
                <Button as={Link} to="/signup" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
