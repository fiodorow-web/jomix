"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/cn";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SearchOverlay({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 bg-background border-b border-border shadow-sm transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Search input */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 lg:py-5">
          <div className="relative flex items-center gap-3">
            <Search className="w-5 h-5 text-muted flex-shrink-0" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj produktów, kategorii, materiałów..."
              className="flex-1 bg-transparent text-base lg:text-lg focus:outline-none placeholder:text-muted"
            />
            <button
              onClick={handleClose}
              className="p-2 -mr-2 text-muted hover:text-foreground"
              aria-label="Zamknij wyszukiwarkę"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results */}
        {query.trim().length >= 2 && (
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-6 border-t border-border">
            {results.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted">
                Brak wyników dla &ldquo;{query}&rdquo;
              </div>
            ) : (
              <>
                <div className="text-xs tracking-[0.15em] uppercase text-muted py-4">
                  Produkty ({results.length})
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/produkt/${product.slug}`}
                        onClick={handleClose}
                        className="group block"
                      >
                        <div className="relative aspect-[3/4] bg-border/30 overflow-hidden mb-2">
                          <Image
                            src={product.colors[0].images[0]}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-sm font-medium line-clamp-1 group-hover:text-accent transition-colors">
                          {product.name}
                        </p>
                        <p className="text-sm tabular-nums mt-0.5">
                          {product.price.toFixed(2)} zł
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>

                {results.length >= 6 && (
                  <div className="mt-4 text-center">
                    <Link
                      href={`/sklep?q=${encodeURIComponent(query)}`}
                      onClick={handleClose}
                      className="inline-flex items-center gap-1.5 text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
                    >
                      Zobacz wszystkie wyniki
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Quick links when empty */}
        {query.trim().length < 2 && (
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-6 border-t border-border">
            <div className="text-xs tracking-[0.15em] uppercase text-muted py-4">
              Popularne kategorie
            </div>
            <div className="flex flex-wrap gap-2">
              {["Sukienki", "Bluzki", "Komplety", "Marynarki", "Spodnie", "Promocje"].map((label) => (
                <Link
                  key={label}
                  href={`/kategoria/${label.toLowerCase()}`}
                  onClick={handleClose}
                  className="px-4 py-2 text-sm border border-border hover:border-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
