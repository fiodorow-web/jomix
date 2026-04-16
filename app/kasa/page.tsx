"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/cn";

const DELIVERY_OPTIONS = [
  { id: "paczkomat", label: "Paczkomat InPost", desc: "2–3 dni robocze", price: 14.99 },
  { id: "kurier", label: "Kurier InPost", desc: "1–2 dni robocze", price: 17.99 },
  { id: "odbior", label: "Odbiór osobisty — Mordy", desc: "W godzinach pracy", price: 0 },
];

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [delivery, setDelivery] = useState("paczkomat");
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery)!;
  const deliveryCost = totalPrice >= 299 ? 0 : deliveryOption.price;
  const total = totalPrice + deliveryCost;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <p className="text-lg font-medium mb-2">Twój koszyk jest pusty</p>
        <p className="text-sm text-muted mb-6">Dodaj produkty, żeby przejść do kasy.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-[0.2em] font-medium">
            JOMIX
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Lock className="w-3.5 h-3.5" />
            Bezpieczna płatność
          </div>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16">
          {/* Left — form */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Kontynuuj zakupy
            </Link>

            {/* Mobile order summary toggle */}
            <button
              className="lg:hidden w-full flex items-center justify-between border border-border px-4 py-3 mb-8 text-sm"
              onClick={() => setOrderSummaryOpen(!orderSummaryOpen)}
            >
              <span className="font-medium">Podsumowanie zamówienia ({items.length})</span>
              <div className="flex items-center gap-2">
                <span className="font-medium tabular-nums">{total.toFixed(2)} zł</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", orderSummaryOpen && "rotate-180")} />
              </div>
            </button>

            {/* Mobile summary */}
            {orderSummaryOpen && (
              <div className="lg:hidden mb-8 border border-border p-4 space-y-4">
                <OrderItems items={items} totalPrice={totalPrice} deliveryCost={deliveryCost} total={total} />
              </div>
            )}

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-base font-medium mb-4">Dane kontaktowe</h2>
              <div className="space-y-3">
                <input type="email" placeholder="Adres e-mail" className={inputCls} />
                <label className="flex items-center gap-2 text-sm text-muted">
                  <input type="checkbox" className="accent-accent" defaultChecked />
                  Chcę otrzymywać informacje o nowościach i promocjach
                </label>
              </div>
            </section>

            {/* Delivery */}
            <section className="mb-8">
              <h2 className="text-base font-medium mb-4">Dostawa</h2>
              <div className="border border-border divide-y divide-border mb-4">
                {DELIVERY_OPTIONS.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-4 px-4 py-3.5 cursor-pointer hover:bg-border/20 transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value={opt.id}
                      checked={delivery === opt.id}
                      onChange={() => setDelivery(opt.id)}
                      className="accent-accent"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{opt.label}</div>
                      <div className="text-xs text-muted">{opt.desc}</div>
                    </div>
                    <div className="text-sm tabular-nums font-medium flex-shrink-0">
                      {totalPrice >= 299 || opt.price === 0
                        ? <span className="text-accent">Gratis</span>
                        : `${opt.price.toFixed(2)} zł`}
                    </div>
                  </label>
                ))}
              </div>

              {/* Address */}
              {delivery !== "odbior" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="Imię" className={inputCls} />
                    <input placeholder="Nazwisko" className={inputCls} />
                  </div>
                  {delivery === "paczkomat" ? (
                    <input placeholder="Wybierz paczkomat..." className={inputCls} readOnly />
                  ) : (
                    <>
                      <input placeholder="Ulica i numer" className={inputCls} />
                      <div className="grid grid-cols-[120px_1fr] gap-3">
                        <input placeholder="Kod pocztowy" className={inputCls} />
                        <input placeholder="Miasto" className={inputCls} />
                      </div>
                    </>
                  )}
                  <input placeholder="Numer telefonu" type="tel" className={inputCls} />
                </div>
              )}
            </section>

            {/* Payment */}
            <section className="mb-8">
              <h2 className="text-base font-medium mb-4">Płatność</h2>
              <div className="border border-border p-4 bg-border/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">Przelewy24</span>
                  <span className="text-xs text-muted ml-auto">BLIK, przelew, karta</span>
                </div>
                <p className="text-xs text-muted">
                  Po kliknięciu „Zamów i zapłać" zostaniesz przekierowana do bezpiecznej bramki płatności Przelewy24.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="space-y-3">
              <button className="w-full h-14 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-accent transition-colors flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Zamów i zapłać — {total.toFixed(2)} zł
              </button>
              <p className="text-xs text-muted text-center leading-relaxed">
                Składając zamówienie akceptujesz{" "}
                <Link href="/regulamin" className="underline underline-offset-2 hover:text-foreground">
                  Regulamin
                </Link>{" "}
                i{" "}
                <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-foreground">
                  Politykę prywatności
                </Link>.
              </p>
            </div>
          </div>

          {/* Right — order summary (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-8 border border-border p-6">
              <h2 className="text-base font-medium mb-5">Zamówienie</h2>
              <OrderItems items={items} totalPrice={totalPrice} deliveryCost={deliveryCost} total={total} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors";

function OrderItems({
  items,
  totalPrice,
  deliveryCost,
  total,
}: {
  items: ReturnType<typeof useCart>["items"];
  totalPrice: number;
  deliveryCost: number;
  total: number;
}) {
  return (
    <>
      <ul className="space-y-4 mb-5">
        {items.map((item) => (
          <li key={`${item.id}-${item.color}-${item.size}`} className="flex gap-3">
            <div className="relative w-16 h-22 flex-shrink-0 bg-border/30 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="64px"
                className="object-cover"
              />
              <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[10px] w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium line-clamp-2 leading-tight">{item.name}</p>
              <p className="text-xs text-muted mt-0.5">{item.color} · {item.size}</p>
              <p className="text-sm font-medium tabular-nums mt-1">
                {(item.price * item.quantity).toFixed(2)} zł
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Discount code */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Kod rabatowy"
          className="flex-1 border border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
        />
        <button className="border border-border px-4 py-2.5 text-sm hover:border-foreground transition-colors flex-shrink-0">
          Użyj
        </button>
      </div>

      <div className="space-y-2 border-t border-border pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted">Wartość produktów</span>
          <span className="tabular-nums">{totalPrice.toFixed(2)} zł</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Dostawa</span>
          <span className="tabular-nums">
            {deliveryCost === 0
              ? <span className="text-accent">Gratis</span>
              : `${deliveryCost.toFixed(2)} zł`}
          </span>
        </div>
        <div className="flex justify-between font-medium text-base pt-2 border-t border-border mt-2">
          <span>Łącznie</span>
          <span className="tabular-nums">{total.toFixed(2)} zł</span>
        </div>
      </div>
    </>
  );
}
