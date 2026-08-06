import clsx from "clsx";

/**
 * Merge conditional class names.
 * Thin wrapper around clsx so components can compose Tailwind classes cleanly.
 */
export function cn(...inputs) {
  return clsx(...inputs);
}
