"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/cn";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIdx(0);
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, [images]);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  return (
    <div className="lg:grid lg:grid-cols-[80px_1fr] lg:gap-4">
      {/* Desktop thumbnails */}
      <div className="hidden lg:flex flex-col gap-2 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => {
              setActiveIdx(idx);
              scrollerRef.current?.scrollTo({
                left: idx * (scrollerRef.current?.clientWidth || 0),
                behavior: "smooth",
              });
            }}
            className={cn(
              "relative aspect-[3/4] overflow-hidden bg-border/30 transition-opacity",
              idx === activeIdx ? "opacity-100 ring-1 ring-foreground" : "opacity-60 hover:opacity-100"
            )}
            aria-label={`Zdjęcie ${idx + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main images — desktop: stacked vertical; mobile: horizontal swipe */}
      <div>
        {/* Desktop — stacked */}
        <div className="hidden lg:flex flex-col gap-2">
          {images.map((src, idx) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden bg-border/30">
              <Image
                src={src}
                alt={`${alt} ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                preload={idx === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile — horizontal swipe */}
        <div className="lg:hidden relative -mx-4">
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="flex overflow-x-auto no-scrollbar snap-x-mandatory"
          >
            {images.map((src, idx) => (
              <div
                key={src}
                className="relative flex-shrink-0 w-screen aspect-[3/4] snap-start-always bg-border/30"
              >
                <Image
                  src={src}
                  alt={`${alt} ${idx + 1}`}
                  fill
                  sizes="100vw"
                  preload={idx === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  scrollerRef.current?.scrollTo({
                    left: idx * (scrollerRef.current?.clientWidth || 0),
                    behavior: "smooth",
                  });
                }}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-colors",
                  idx === activeIdx ? "bg-foreground" : "bg-foreground/30"
                )}
                aria-label={`Zdjęcie ${idx + 1}`}
              />
            ))}
          </div>
          {/* Counter */}
          <div className="absolute top-3 right-4 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 tabular-nums">
            {activeIdx + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
