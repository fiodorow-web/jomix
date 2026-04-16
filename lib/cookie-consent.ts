"use client";

export type ConsentLevel = "none" | "necessary" | "all";

const STORAGE_KEY = "jomix_cookie_consent";

export function getConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem(STORAGE_KEY) as ConsentLevel) ?? null;
}

export function setConsent(level: ConsentLevel): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, level);
  window.dispatchEvent(new Event("cookie-consent-change"));
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}
