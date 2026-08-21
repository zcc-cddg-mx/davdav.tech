"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { NAV_LINKS } from "./nav-links";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const rawPathname = usePathname();
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/$/, "") : rawPathname;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[var(--background)] border-l border-[var(--border)] shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <span className="font-semibold text-[var(--foreground)]">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "nav-active"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
