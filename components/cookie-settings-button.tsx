"use client";

export function CookieSettingsButton({ className }: { className?: string }) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    localStorage.removeItem("jomix_cookie_consent");
    window.location.reload();
  }

  return (
    <button onClick={handleClick} className={className}>
      Zarządzaj cookies
    </button>
  );
}
