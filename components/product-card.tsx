"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/data/types";
import { cn } from "@/lib/cn";

type Props = {
  product: Product;
  preload?: boolean;
  sizes?: string;
};

export function ProductCard({ product, preload = false, sizes }: Props) {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const activeColor = product.colors[activeColorIdx];
  const [img1, img2] = activeColor.images;

  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/produkt/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-border/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Primary image */}
        <Image
          src={img1}
          alt={`${product.name} — ${activeColor.name}`}
          fill
          sizes={sizes || "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
          preload={preload}
          className={cn(
            "object-cover transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary image (crossfade on hover) */}
        <Image
          src={img2}
          alt=""
          aria-hidden
          fill
          sizes={sizes || "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
          className={cn(
            "object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 text-[10px] tracking-[0.15em] px-2 py-1 font-medium uppercase",
              product.badge === "SALE"
                ? "bg-sale text-white"
                : "bg-background text-foreground"
            )}
          >
            {product.badge}
          </span>
        )}

        {/* Favorite */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFav(!isFav);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Dodaj do ulubionych"
        >
          <Heart
            className={cn(
              "w-4 h-4",
              isFav ? "fill-sale text-sale" : "text-foreground"
            )}
          />
        </button>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1 flex flex-col gap-1.5">
        {/* Color swatches */}
        {product.colors.length > 1 && (
          <div className="flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onMouseEnter={() => setActiveColorIdx(idx)}
                onClick={() => setActiveColorIdx(idx)}
                className={cn(
                  "w-4 h-4 rounded-full border transition-all",
                  idx === activeColorIdx
                    ? "ring-1 ring-offset-2 ring-offset-background ring-foreground scale-110"
                    : "border-border hover:scale-110"
                )}
                style={{ backgroundColor: color.hex }}
                aria-label={`Kolor: ${color.name}`}
                title={color.name}
              />
            ))}
          </div>
        )}

        <Link href={`/produkt/${product.slug}`} className="flex flex-col gap-0.5">
          <h3 className="text-sm font-normal leading-snug">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                "text-sm tabular-nums",
                onSale ? "text-sale font-medium" : "font-medium"
              )}
            >
              {product.price.toFixed(2)} zł
            </span>
            {onSale && (
              <span className="text-xs text-muted line-through tabular-nums">
                {product.compareAtPrice!.toFixed(2)} zł
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
