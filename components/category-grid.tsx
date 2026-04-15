import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
      {categories.map((cat, idx) => (
        <Link
          key={cat.slug}
          href={cat.href}
          className="group relative block aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-border/30"
        >
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            preload={idx < 2}
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 text-white">
            <div className="text-lg lg:text-2xl font-medium tracking-tight">
              {cat.name}
            </div>
            <div className="text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-80 transition-opacity mt-1">
              Zobacz →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
