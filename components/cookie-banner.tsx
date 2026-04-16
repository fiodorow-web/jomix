"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getConsent, setConsent, hasConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasConsent()) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  function acceptAll() {
    setConsent("all");
    setVisible(false);
  }

  function acceptNecessary() {
    setConsent("necessary");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Ustawienia cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1 leading-relaxed">
          Używamy plików cookies, żeby strona działała poprawnie i abyśmy mogli
          analizować ruch. Możesz zaakceptować wszystkie cookies lub tylko niezbędne.{" "}
          <Link
            href="/polityka-prywatnosci"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            Dowiedz się więcej
          </Link>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={acceptNecessary}
            className="px-5 py-2.5 text-xs border border-white/30 hover:border-white transition-colors"
          >
            Tylko niezbędne
          </button>
          <button
            onClick={acceptAll}
            className="px-5 py-2.5 text-xs bg-accent hover:bg-accent-dark transition-colors font-medium"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
