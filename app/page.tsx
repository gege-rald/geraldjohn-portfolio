"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main className="min-h-screen p-16">
      {/* Mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 font-label text-faint border-medium px-4 py-2 hover:text-primary transition-colors duration-300"
      >
        {isDark ? "LIGHT" : "DARK"}
      </button>

      <p className="font-label text-faint mb-4">design system test</p>
      <h1 className="font-display text-hero font-normal text-primary mb-8">
        Gerald John<br />
        <span className="text-muted">Mengg AI.</span>
      </h1>
      <p className="font-body text-sm text-muted max-w-md leading-[1.7]">
        Dark background. White headline. Gray subtext.
        No color anywhere. Grain texture visible.
        Phase 0 done.
      </p>
    </main>
  );
}