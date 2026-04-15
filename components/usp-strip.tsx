import { MapPin, RotateCcw, Truck, CreditCard } from "lucide-react";

const items = [
  { icon: MapPin, title: "Szyjemy w Polsce", text: "Każdy produkt z naszej pracowni" },
  { icon: Truck, title: "Darmowa dostawa", text: "Przy zamówieniach od 299 zł" },
  { icon: RotateCcw, title: "30 dni na zwrot", text: "Prosty proces zwrotu i wymiany" },
  { icon: CreditCard, title: "Bezpieczne płatności", text: "Przelewy24, BLIK, karty" },
];

export function UspStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-3 py-6 px-4 lg:px-6 first:border-l-0 lg:first:border-l-0"
            >
              <Icon className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
              <div className="min-w-0">
                <div className="text-sm font-medium leading-tight">{title}</div>
                <div className="text-xs text-muted mt-0.5 leading-tight">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
