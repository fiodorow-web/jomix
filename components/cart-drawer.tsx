"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/cn";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();
  const router = useRouter();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background flex flex-col shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-border flex-shrink-0">
          <div className="text-base font-medium">
            Koszyk
            {totalItems > 0 && (
              <span className="ml-2 text-sm text-muted tabular-nums">
                ({totalItems})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2"
            aria-label="Zamknij koszyk"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-border" strokeWidth={1} />
            <div>
              <p className="font-medium mb-1">Twój koszyk jest pusty</p>
              <p className="text-sm text-muted">
                Dodaj produkty, żeby zacząć zakupy
              </p>
            </div>
            <button
              onClick={closeCart}
              className="mt-2 border border-border px-6 py-2.5 text-sm hover:border-foreground transition-colors"
            >
              Kontynuuj zakupy
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex gap-4 py-4"
                  >
                    {/* Image */}
                    <Link
                      href={`/produkt/${item.slug}`}
                      onClick={closeCart}
                      className="relative w-20 h-28 flex-shrink-0 bg-border/30 overflow-hidden"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <Link
                          href={`/produkt/${item.slug}`}
                          onClick={closeCart}
                          className="text-sm font-medium leading-tight hover:text-accent transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-muted mt-1">
                          {item.color} · Rozmiar {item.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.color,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-border/40"
                            aria-label="Zmniejsz ilość"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.color,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-border/40"
                            aria-label="Zwiększ ilość"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-sm font-medium tabular-nums">
                          {(item.price * item.quantity).toFixed(2)} zł
                        </div>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeItem(item.id, item.color, item.size)
                      }
                      className="self-start p-1 text-muted hover:text-foreground transition-colors"
                      aria-label="Usuń z koszyka"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-5 py-5 flex-shrink-0 space-y-3">
              {totalPrice >= 299 ? (
                <p className="text-xs text-center text-accent font-medium">
                  ✓ Darmowa dostawa!
                </p>
              ) : (
                <p className="text-xs text-center text-muted">
                  Do darmowej dostawy brakuje{" "}
                  <span className="font-medium text-foreground tabular-nums">
                    {(299 - totalPrice).toFixed(2)} zł
                  </span>
                </p>
              )}

              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted">Wartość koszyka</span>
                <span className="font-medium tabular-nums">
                  {totalPrice.toFixed(2)} zł
                </span>
              </div>
              <p className="text-xs text-muted -mt-1">
                Dostawa i rabaty liczone w kasie
              </p>

              <button
                onClick={() => { closeCart(); router.push("/kasa"); }}
                className="w-full h-12 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                Przejdź do kasy
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-muted hover:text-foreground transition-colors py-1"
              >
                Kontynuuj zakupy
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
