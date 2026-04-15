import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function EditorialBanner() {
  return (
    <section className="relative overflow-hidden bg-accent-soft/40">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-0 items-stretch">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-border/40">
          <Image
            src="https://picsum.photos/seed/jomix-atelier/1200/1200"
            alt="Pracownia Jomix w Polsce"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-12 lg:px-16 lg:py-20">
          <div className="max-w-md">
            <div className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Historia marki
            </div>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight mb-5">
              Szyjemy w Polsce.<br />
              Z myślą o każdym detalu.
            </h2>
            <p className="text-sm lg:text-base text-muted leading-relaxed mb-7">
              Każda sukienka, bluzka i marynarka powstaje w naszej pracowni.
              Pracujemy z naturalnymi tkaninami — lnem, bawełną, wiskozą — które
              oddychają, starzeją się z gracją i służą latami.
            </p>
            <Link
              href="/o-nas"
              className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm tracking-wide hover:text-accent hover:border-accent transition-colors"
            >
              Poznaj Jomix
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
