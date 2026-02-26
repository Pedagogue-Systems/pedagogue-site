"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b bg-[var(--background)] px-4 pb-4 flex flex-col gap-3">
          <Link
            href="/platform"
            onClick={() => setOpen(false)}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Platform
          </Link>
          <Link
            href="/perspectives"
            onClick={() => setOpen(false)}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Perspectives
          </Link>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary-600 text-center text-sm"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </div>
  );
}
