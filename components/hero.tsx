import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[520px] max-h-[800px] overflow-hidden bg-border/40">
      <Image
        src="https://picsum.photos/seed/jomix-hero-ss26/1800/1200"
        alt="Jomix — kolekcja wiosna 2026"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />

      <div className="absolute inset-0 flex items-end lg:items-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-8 pb-10 lg:pb-0">
          <div className="max-w-xl text-white">
            <div className="text-xs tracking-[0.3em] uppercase mb-4 opacity-90">
              Nowa kolekcja · Wiosna 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-5">
              Naturalne tkaniny,<br />
              ponadczasowe kroje.
            </h1>
            <p className="text-sm lg:text-base opacity-90 mb-7 leading-relaxed max-w-md">
              Sukienki, bluzki i komplety szyte w Polsce z lnu, bawełny i wiskozy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kategoria/nowosci"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-sm tracking-wide hover:bg-accent hover:text-white transition-colors"
              >
                Zobacz kolekcję
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kategoria/promocje"
                className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-foreground transition-colors"
              >
                -25% z kodem WIOSNA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
