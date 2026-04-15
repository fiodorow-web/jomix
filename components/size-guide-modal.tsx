"use client";

import { X, Ruler } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SizeGuideRow, SizeOption } from "@/data/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  sizeGuide: SizeGuideRow[];
  selectedSize?: SizeOption | null;
  productName: string;
};

export function SizeGuideModal({
  isOpen,
  onClose,
  sizeGuide,
  selectedSize,
  productName,
}: Props) {
  const hasBust = sizeGuide.some((r) => r.bust !== "—");

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed inset-x-4 bottom-0 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-50 bg-background max-w-lg w-full lg:w-[480px] transition-transform duration-300",
          isOpen
            ? "translate-y-0 lg:translate-y-[-50%]"
            : "translate-y-full lg:translate-y-[-40%] pointer-events-none opacity-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-accent" />
            <span className="font-medium text-sm">Tabela rozmiarów</span>
          </div>
          <button onClick={onClose} className="p-1.5 -mr-1.5 hover:text-accent" aria-label="Zamknij">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-4 overflow-y-auto max-h-[80vh] lg:max-h-[70vh]">
          <p className="text-xs text-muted mb-4">
            Wymiary w centymetrach dla <span className="font-medium text-foreground">{productName}</span>.
            W razie wątpliwości polecamy rozmiar większy.
          </p>

          {/* Jak mierzyć */}
          <div className="bg-accent-soft/30 border border-accent-soft px-4 py-3 text-xs text-muted mb-5 space-y-1.5">
            <p className="font-medium text-foreground text-sm mb-2">Jak mierzyć?</p>
            {hasBust && (
              <p>
                <span className="font-medium text-foreground">Obwód klatki:</span>{" "}
                mierz w najszerszym miejscu, poziomo pod pachami
              </p>
            )}
            <p>
              <span className="font-medium text-foreground">Obwód talii:</span>{" "}
              mierz w najwęższym miejscu tułowia
            </p>
            <p>
              <span className="font-medium text-foreground">Obwód bioder:</span>{" "}
              mierz w najszerszym miejscu bioder
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs tracking-[0.15em] uppercase text-muted font-medium py-2 pr-4 w-14">
                    Rozmiar
                  </th>
                  {hasBust && (
                    <th className="text-center text-xs tracking-[0.15em] uppercase text-muted font-medium py-2 px-3">
                      Klatka
                    </th>
                  )}
                  <th className="text-center text-xs tracking-[0.15em] uppercase text-muted font-medium py-2 px-3">
                    Talia
                  </th>
                  <th className="text-center text-xs tracking-[0.15em] uppercase text-muted font-medium py-2 pl-3">
                    Biodra
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sizeGuide.map((row) => {
                  const isSelected = selectedSize === row.size;
                  return (
                    <tr
                      key={row.size}
                      className={cn(
                        "transition-colors",
                        isSelected && "bg-accent/8"
                      )}
                    >
                      <td className="py-3 pr-4 font-medium">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5",
                            isSelected && "text-accent"
                          )}
                        >
                          {row.size}
                          {isSelected && (
                            <span className="text-[10px] bg-accent text-white px-1.5 py-0.5 font-normal">
                              wybrany
                            </span>
                          )}
                        </span>
                      </td>
                      {hasBust && (
                        <td className="py-3 px-3 text-center text-muted tabular-nums">
                          {row.bust}
                        </td>
                      )}
                      <td className="py-3 px-3 text-center text-muted tabular-nums">
                        {row.waist}
                      </td>
                      <td className="py-3 pl-3 text-center text-muted tabular-nums">
                        {row.hips}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted mt-4 pt-4 border-t border-border">
            Pomiary dotyczą sylwetki, nie ubrania. Masz pytania o rozmiar?{" "}
            <a href="/kontakt" className="underline underline-offset-2 hover:text-accent">
              Napisz do nas
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
