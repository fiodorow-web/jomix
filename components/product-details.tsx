"use client";

import { useState } from "react";
import { Heart, ChevronDown, Ruler, Truck, RotateCcw } from "lucide-react";
import type { Product, SizeOption } from "@/data/types";
import { cn } from "@/lib/cn";
import { ProductGallery } from "./product-gallery";
import { useCart } from "@/lib/cart-context";
import { SizeGuideModal } from "./size-guide-modal";

type Props = {
  product: Product;
};

export function ProductDetails({ product }: Props) {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [isFav, setIsFav] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("opis");
  const [sizeError, setSizeError] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const { addItem } = useCart();

  const activeColor = product.colors[activeColorIdx];
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = onSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2500);
      return;
    }
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: activeColor.images[0],
      color: activeColor.name,
      size: selectedSize,
    });
  };

  return (
    <>
      {product.sizeGuide && (
        <SizeGuideModal
          isOpen={sizeGuideOpen}
          onClose={() => setSizeGuideOpen(false)}
          sizeGuide={product.sizeGuide}
          selectedSize={selectedSize}
          productName={product.name}
        />
      )}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-12 lg:pb-20">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-12">
        {/* Gallery */}
        <div>
          <ProductGallery
            images={activeColor.images}
            alt={`${product.name} — ${activeColor.name}`}
          />
        </div>

        {/* Info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2">
            {/* Category link */}
            <div className="text-xs tracking-[0.15em] uppercase text-muted mb-2">
              {product.category}
            </div>

            {/* Name */}
            <h1 className="text-2xl lg:text-3xl font-medium tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-1">
              <span
                className={cn(
                  "text-xl tabular-nums",
                  onSale ? "text-sale font-medium" : "font-medium"
                )}
              >
                {product.price.toFixed(2)} zł
              </span>
              {onSale && (
                <>
                  <span className="text-sm text-muted line-through tabular-nums">
                    {product.compareAtPrice!.toFixed(2)} zł
                  </span>
                  <span className="text-xs bg-sale text-white px-1.5 py-0.5 font-medium">
                    -{discount}%
                  </span>
                </>
              )}
            </div>
            <div className="text-xs text-muted mb-6">
              Cena zawiera VAT. Darmowa dostawa od 299 zł.
            </div>

            {/* Color */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm">
                  Kolor: <span className="font-medium">{activeColor.name}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColorIdx(idx)}
                    className={cn(
                      "w-10 h-10 rounded-full border transition-all",
                      idx === activeColorIdx
                        ? "ring-1 ring-offset-2 ring-offset-background ring-foreground"
                        : "border-border hover:scale-105"
                    )}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm">
                  Rozmiar
                  {selectedSize && (
                    <span className="font-medium">: {selectedSize}</span>
                  )}
                </div>
                {product.sizeGuide && (
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-xs underline underline-offset-2 flex items-center gap-1 hover:text-accent transition-colors"
                  >
                    <Ruler className="w-3 h-3" />
                    Tabela rozmiarów
                  </button>
                )}
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {product.sizes.map(({ size, inStock }) => (
                  <button
                    key={size}
                    onClick={() => {
                      if (!inStock) return;
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    disabled={!inStock}
                    className={cn(
                      "h-11 text-sm border transition-colors",
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : inStock
                          ? "border-border hover:border-foreground"
                          : "border-border text-muted line-through cursor-not-allowed"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="mt-2 text-xs text-sale">
                  Wybierz rozmiar przed dodaniem do koszyka
                </p>
              )}
            </div>

            {/* Add to cart */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={handleAddToCart}
                className={cn(
                  "flex-1 h-12 text-background text-sm tracking-wide font-medium transition-colors",
                  sizeError
                    ? "bg-sale hover:bg-sale/90"
                    : "bg-foreground hover:bg-accent"
                )}
              >
                {sizeError ? "Wybierz rozmiar" : "Dodaj do koszyka"}
              </button>
              <button
                onClick={() => setIsFav(!isFav)}
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                aria-label="Dodaj do ulubionych"
              >
                <Heart
                  className={cn(
                    "w-5 h-5",
                    isFav ? "fill-sale text-sale" : ""
                  )}
                />
              </button>
            </div>

            {/* Shipping info */}
            <div className="border-y border-border divide-y divide-border mb-6">
              <InfoRow
                icon={<Truck className="w-4 h-4" />}
                title="Darmowa dostawa od 299 zł"
                text="Paczkomaty InPost, kurier lub odbiór osobisty w Mordach"
              />
              <InfoRow
                icon={<RotateCcw className="w-4 h-4" />}
                title="30 dni na zwrot"
                text="Bezpłatny zwrot w ciągu 30 dni od otrzymania"
              />
            </div>

            {/* Accordions */}
            <div className="border-t border-border divide-y divide-border">
              <Accordion
                title="Opis produktu"
                isOpen={expanded === "opis"}
                onToggle={() => setExpanded(expanded === "opis" ? null : "opis")}
              >
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
                {product.modelInfo && (
                  <p className="text-xs text-muted mt-3 italic">
                    {product.modelInfo}
                  </p>
                )}
              </Accordion>

              <Accordion
                title="Szczegóły i materiał"
                isOpen={expanded === "szczegoly"}
                onToggle={() =>
                  setExpanded(expanded === "szczegoly" ? null : "szczegoly")
                }
              >
                <div className="text-sm">
                  <div className="font-medium mb-2">Materiał</div>
                  <p className="text-muted mb-4">{product.material}</p>
                  <div className="font-medium mb-2">Cechy</div>
                  <ul className="text-muted space-y-1 list-disc list-inside">
                    {product.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </Accordion>

              <Accordion
                title="Pielęgnacja"
                isOpen={expanded === "pielegnacja"}
                onToggle={() =>
                  setExpanded(expanded === "pielegnacja" ? null : "pielegnacja")
                }
              >
                <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                  {product.care.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Accordion>

              <Accordion
                title="Dostawa i zwroty"
                isOpen={expanded === "dostawa"}
                onToggle={() =>
                  setExpanded(expanded === "dostawa" ? null : "dostawa")
                }
              >
                <div className="text-sm text-muted space-y-2">
                  <p>
                    <strong className="text-foreground">Paczkomat InPost:</strong>{" "}
                    14,99 zł (2-3 dni)
                  </p>
                  <p>
                    <strong className="text-foreground">Kurier InPost:</strong> 17,99
                    zł (1-2 dni)
                  </p>
                  <p>
                    <strong className="text-foreground">Odbiór osobisty Mordy:</strong>{" "}
                    0 zł
                  </p>
                  <p className="pt-2">
                    Darmowa dostawa przy zamówieniach powyżej 299 zł.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Accordion({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-sm font-medium text-left"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && <div className="pb-5">{children}</div>}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="text-accent mt-0.5">{icon}</div>
      <div className="text-sm">
        <div className="font-medium">{title}</div>
        <div className="text-muted text-xs mt-0.5">{text}</div>
      </div>
    </div>
  );
}
