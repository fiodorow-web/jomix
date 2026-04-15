"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "./product-card";
import { CategoryToolbar, type Filters, type SortOption } from "./category-toolbar";
import type { Product } from "@/data/types";

type Props = {
  products: Product[];
  categoryName: string;
};

export function CategoryView({ products, categoryName }: Props) {
  const [filters, setFilters] = useState<Filters>({
    sizes: [],
    colors: [],
    materials: [],
    onSaleOnly: false,
  });
  const [sort, setSort] = useState<SortOption>("recommended");

  const filtered = useMemo(() => {
    let list = [...products];

    if (filters.onSaleOnly) {
      list = list.filter((p) => p.compareAtPrice);
    }
    if (filters.sizes.length) {
      list = list.filter((p) =>
        p.sizes.some((s) => s.inStock && filters.sizes.includes(s.size))
      );
    }
    if (filters.colors.length) {
      list = list.filter((p) =>
        p.colors.some((c) => filters.colors.includes(c.name))
      );
    }
    if (filters.materials.length) {
      list = list.filter((p) =>
        filters.materials.some((m) =>
          p.material.toLowerCase().includes(m.toLowerCase())
        )
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => {
          const na = a.badge === "NOWOŚĆ" ? 1 : 0;
          const nb = b.badge === "NOWOŚĆ" ? 1 : 0;
          return nb - na;
        });
        break;
    }
    return list;
  }, [products, filters, sort]);

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pt-2 pb-6 lg:pt-4 lg:pb-10">
        <h1 className="text-3xl lg:text-5xl font-medium tracking-tight">
          {categoryName}
        </h1>
        <p className="text-sm text-muted mt-2">
          Odkryj naszą kolekcję —{" "}
          <span className="tabular-nums">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "produkt" : "produktów"}
        </p>
      </div>

      <CategoryToolbar
        totalCount={filtered.length}
        filters={filters}
        setFilters={setFilters}
        sort={sort}
        setSort={setSort}
      />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-base mb-2">Brak produktów pasujących do filtrów</p>
            <button
              onClick={() =>
                setFilters({
                  sizes: [],
                  colors: [],
                  materials: [],
                  onSaleOnly: false,
                })
              }
              className="text-sm underline underline-offset-2 hover:text-accent"
            >
              Wyczyść filtry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 gap-y-8 lg:gap-y-12">
            {filtered.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                preload={idx < 4}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
