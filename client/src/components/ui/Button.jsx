import { cn } from "../../lib/utils";

/**
 * Button
 * Variants: primary (gold gradient), outline (ghost gold border), text (link-style)
 * Sizes: sm, md, lg
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  as: Tag = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "btn-gold",
    outline: "btn-outline-gold",
    text: "text-[var(--color-gold-2)] hover:text-[var(--color-gold)] underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-[15px] px-6 py-3 rounded-full",
    lg: "text-base px-8 py-4 rounded-full",
  };

  return (
    <Tag
      className={cn(base, variants[variant], variant !== "text" && sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
