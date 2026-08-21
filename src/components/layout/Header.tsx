"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS } from "./nav-links";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors text-sm sm:text-base"
            >
              Carlos David Duarte
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-primary)] bg-[var(--card)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <DarkModeToggle />
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-md text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
