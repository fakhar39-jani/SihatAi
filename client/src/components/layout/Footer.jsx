import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "AI Chat", href: "/chat" },
      { label: "Symptom Checker", href: "/symptom-checker" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Medical Disclaimer", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#0B0B0B]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-2)] text-[#0B0B0B]">
                <HiOutlineSparkles size={18} />
              </span>
              <span className="font-[var(--font-display)] text-[17px] font-bold text-white">
                MedGuide <span className="gold-gradient-text">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Healthcare guidance powered by artificial intelligence — clear, private, and available whenever you need it.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold-2)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold-2)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-faint)]">
            © {new Date().getFullYear()} Jwand AI. Built for the Alibaba Cloud AI Hackathon & Bano Qabil AI Hackathon.
          </p>
          <p className="text-xs text-[var(--color-text-faint)] text-center max-w-md">
            Jwand AI provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
