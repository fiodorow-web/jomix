"use client";

import { useState } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type SortOption =
  | "recommended"
  | "newest"
  | "price-asc"
  | "price-desc";

export type Filters = {
  sizes: string[];
  colors: string[];
  materials: string[];
  onSaleOnly: boolean;
};

const sortLabels: Record<SortOption, string> = {
  recommended: "Polecane",
  newest: "Najnowsze",
  "price-asc": "Cena: rosnąco",
  "price-desc": "Cena: malejąco",
};

const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const availableColors = [
  { name: "Czarny", hex: "#1a1a1a" },
  { name: "Biały", hex: "#ffffff" },
  { name: "Beż", hex: "#d6c3a5" },
  { name: "Oliwkowy", hex: "#6b7353" },
  { name: "Brąz", hex: "#8b6f4e" },
  { name: "Grafit", hex: "#4a4a4a" },
  { name: "Kremowy", hex: "#ede4d3" },
  { name: "Liliowy", hex: "#c3b0cf" },
];
const availableMaterials = ["Len", "Bawełna", "Wiskoza"];

type Props = {
  totalCount: number;
  filters: Filters;
  setFilters: (f: Filters) => void;
  sort: SortOption;
  setSort: (s: SortOption) => void;
};

export function CategoryToolbar({
  totalCount,
  filters,
  setFilters,
  sort,
  setSort,
}: Props) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeFilterCount =
    filters.sizes.length +
    filters.colors.length +
    filters.materials.length +
    (filters.onSaleOnly ? 1 : 0);

  const toggleIn = <T,>(arr: T[], value: T): T[] =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  return (
    <>
      <div className="sticky top-14 lg:top-16 z-20 bg-background border-b border-border">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 text-sm border border-border px-4 py-2 hover:border-foreground transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtry
            {activeFilterCount > 0 && (
              <span className="bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center tabular-nums">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="hidden sm:block text-sm text-muted tabular-nums">
            {totalCount} {totalCount === 1 ? "produkt" : totalCount < 5 ? "produkty" : "produktów"}
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm px-4 py-2 hover:text-accent transition-colors"
            >
              Sortuj: <span className="font-medium">{sortLabels[sort]}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  sortOpen && "rotate-180"
                )}
              />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 bg-background border border-border min-w-[180px] z-20 shadow-sm">
                  {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSort(key);
                        setSortOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm hover:bg-border/40",
                        sort === key && "font-medium"
                      )}
                    >
                      {sortLabels[key]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Filter drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity",
          filterOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setFilterOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[88%] max-w-md bg-background flex flex-col transition-transform duration-300",
            filterOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-14 border-b border-border">
            <div className="text-base font-medium">Filtry</div>
            <button
              onClick={() => setFilterOpen(false)}
              className="p-2 -mr-2"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {/* On sale */}
            <label className="flex items-center justify-between py-3 cursor-pointer border-b border-border mb-4">
              <span className="text-sm">Tylko promocje</span>
              <input
                type="checkbox"
                checked={filters.onSaleOnly}
                onChange={(e) =>
                  setFilters({ ...filters, onSaleOnly: e.target.checked })
                }
                className="w-4 h-4 accent-accent"
              />
            </label>

            {/* Sizes */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-muted mb-3">
                Rozmiar
              </div>
              <div className="grid grid-cols-4 gap-2">
                {availableSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        sizes: toggleIn(filters.sizes, s),
                      })
                    }
                    className={cn(
                      "h-10 text-sm border transition-colors",
                      filters.sizes.includes(s)
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-muted mb-3">
                Kolor
              </div>
              <div className="grid grid-cols-2 gap-2">
                {availableColors.map((c) => {
                  const active = filters.colors.includes(c.name);
                  return (
                    <button
                      key={c.name}
                      onClick={() =>
                        setFilters({
                          ...filters,
                          colors: toggleIn(filters.colors, c.name),
                        })
                      }
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 border text-sm transition-colors",
                        active
                          ? "border-foreground"
                          : "border-border hover:border-foreground"
                      )}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-border flex-shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Materials */}
            <div className="mb-6">
              <div className="text-xs tracking-[0.15em] uppercase text-muted mb-3">
                Materiał
              </div>
              <div className="flex flex-wrap gap-2">
                {availableMaterials.map((m) => (
                  <button
                    key={m}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        materials: toggleIn(filters.materials, m),
                      })
                    }
                    className={cn(
                      "px-4 py-2 text-sm border transition-colors",
                      filters.materials.includes(m)
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border px-5 py-4 flex gap-3">
            <button
              onClick={() =>
                setFilters({
                  sizes: [],
                  colors: [],
                  materials: [],
                  onSaleOnly: false,
                })
              }
              className="flex-1 h-11 border border-border text-sm hover:border-foreground transition-colors"
            >
              Wyczyść
            </button>
            <button
              onClick={() => setFilterOpen(false)}
              className="flex-1 h-11 bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
            >
              Pokaż produkty ({totalCount})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
