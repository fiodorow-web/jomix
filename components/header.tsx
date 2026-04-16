"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, Search, ShoppingBag, Menu, X, ChevronRight, User } from "lucide-react";
import { menuStructure } from "@/data/products";
import { cn } from "@/lib/cn";
import { useCart } from "@/lib/cart-context";
import { SearchOverlay } from "./search-overlay";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Announcement bar */}
      <div className="bg-foreground text-background text-xs tracking-wider">
        <div className="max-w-[1440px] mx-auto px-4 py-2 text-center">
          DARMOWA DOSTAWA OD 299 ZŁ &nbsp;·&nbsp; KOD WIOSNA — 25% NA WSZYSTKO
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-40 bg-background border-b border-border"
        onMouseLeave={() => setOpenMegaMenu(null)}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Otwórz menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="text-xl lg:text-2xl font-medium tracking-[0.2em] lg:flex-none lg:mr-12"
            >
              JOMIX
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7 flex-1">
              {menuStructure.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMegaMenu(item.label)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm tracking-wide py-5 border-b-2 border-transparent transition-colors hover:border-foreground",
                      item.accent && "text-sale font-medium",
                      openMegaMenu === item.label && "border-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1 lg:gap-2">
              <button
                className="p-2"
                aria-label="Szukaj"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hidden lg:inline-flex" aria-label="Konto">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hidden lg:inline-flex" aria-label="Ulubione">
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-2 -mr-2 relative"
                aria-label="Koszyk"
                onClick={openCart}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center tabular-nums">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu — desktop */}
        {openMegaMenu &&
          (() => {
            const active = menuStructure.find((m) => m.label === openMegaMenu);
            if (!active || !("columns" in active) || !active.columns) return null;
            return (
              <div className="hidden lg:block absolute left-0 right-0 top-full bg-background border-b border-border shadow-sm">
                <div className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-5 gap-10">
                  {active.columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="text-xs tracking-[0.15em] font-medium mb-4 text-muted uppercase">
                        {col.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-sm hover:text-accent transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {active.feature && (
                    <Link
                      href={active.feature.href}
                      className="col-span-2 relative aspect-[4/3] overflow-hidden group bg-border/40"
                    >
                      <Image
                        src={active.feature.image}
                        alt={active.feature.title}
                        fill
                        sizes="(max-width: 1440px) 40vw, 560px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-xs tracking-[0.2em] uppercase mb-1">
                          Odkryj
                        </div>
                        <div className="text-2xl font-medium">
                          {active.feature.title}
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            );
          })()}
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-background flex flex-col transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-4 h-14 border-b border-border">
            <span className="text-lg tracking-[0.2em] font-medium">JOMIX</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
              aria-label="Zamknij menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-4 py-3 border-b border-border">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="search"
                placeholder="Szukaj produktów..."
                className="w-full bg-border/30 border-0 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:bg-border/60"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-border">
              {menuStructure.map((item) => {
                const hasChildren = "columns" in item && item.columns;
                const expanded = expandedMobile === item.label;
                return (
                  <li key={item.label}>
                    {hasChildren ? (
                      <>
                        <button
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-4 text-left text-base",
                            item.accent && "text-sale font-medium"
                          )}
                          onClick={() =>
                            setExpandedMobile(expanded ? null : item.label)
                          }
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "w-4 h-4 transition-transform",
                              expanded && "rotate-90"
                            )}
                          />
                        </button>
                        {expanded && (
                          <div className="bg-border/20 pb-3">
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-sm text-accent font-medium"
                            >
                              Zobacz wszystkie {item.label.toLowerCase()}
                            </Link>
                            {item.columns!.map((col) => (
                              <div key={col.title} className="pt-2">
                                <div className="px-4 pb-1 text-xs tracking-[0.15em] text-muted uppercase">
                                  {col.title}
                                </div>
                                <ul>
                                  {col.links.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-2 text-sm"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-4 text-base",
                          item.accent && "text-sale font-medium"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-muted" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-border mt-2 divide-y divide-border">
              <Link
                href="/konto"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-4 text-sm"
              >
                <User className="w-4 h-4" />
                Konto
              </Link>
              <Link
                href="/o-nas"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-4 text-sm"
              >
                O nas
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-4 text-sm"
              >
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
