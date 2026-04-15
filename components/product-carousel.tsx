"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./product-card";
import type { Product } from "@/data/types";

type Props = {
  products: Product[];
};

export function ProductCarousel({ products }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-3 lg:gap-4 overflow-x-auto no-scrollbar snap-x-mandatory pb-2 -mx-4 px-4 lg:mx-0 lg:px-0"
      >
        {products.map((product) => (
          <div
            key={product.id}
            data-carousel-item
            className="flex-shrink-0 w-[65%] sm:w-[40%] md:w-[32%] lg:w-[calc(25%-12px)] snap-start-always"
          >
            <ProductCard
              product={product}
              sizes="(max-width: 640px) 65vw, (max-width: 768px) 40vw, (max-width: 1024px) 32vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Desktop arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute left-0 top-[38%] -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border items-center justify-center shadow-sm hover:bg-border/40 transition-colors"
        aria-label="Przewiń w lewo"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute right-0 top-[38%] -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border items-center justify-center shadow-sm hover:bg-border/40 transition-colors"
        aria-label="Przewiń w prawo"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
