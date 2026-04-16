import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Kontakt – Jomix",
  description: "Skontaktuj się z nami. E-mail, formularz kontaktowy, adres odbioru osobistego w Mordach.",
};

export default function KontaktPage() {
  return (
    <StaticPageLayout title="Kontakt">
      <p>
        Masz pytanie o rozmiar, zamówienie lub współpracę?
        Napisz do nas — odpowiadamy w ciągu 24 godzin w dni robocze.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 my-8 not-prose">
        <ContactCard
          icon={<Mail className="w-5 h-5" />}
          label="E-mail"
          value="kontakt@jomix.pl"
          href="mailto:kontakt@jomix.pl"
        />
        <ContactCard
          icon={<MapPin className="w-5 h-5" />}
          label="Odbiór osobisty"
          value="Mordy, woj. mazowieckie"
        />
        <ContactCard
          icon={<Clock className="w-5 h-5" />}
          label="Godziny pracy"
          value="Pon–Pt: 9:00–17:00"
        />
      </div>

      <h2>Formularz kontaktowy</h2>
      <form className="space-y-4 mt-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Imię"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
          />
          <input
            type="email"
            placeholder="Adres e-mail"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="Temat"
          className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
        />
        <textarea
          placeholder="Wiadomość"
          rows={5}
          className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-foreground transition-colors resize-none"
        />
        <button
          type="submit"
          className="bg-foreground text-background px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
        >
          Wyślij wiadomość
        </button>
      </form>
    </StaticPageLayout>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border border-border p-5 text-center space-y-2">
      <div className="flex justify-center text-accent">{icon}</div>
      <div className="text-xs text-muted uppercase tracking-wider">{label}</div>
      {href ? (
        <a href={href} className="text-sm font-medium hover:text-accent transition-colors block">
          {value}
        </a>
      ) : (
        <div className="text-sm font-medium">{value}</div>
      )}
    </div>
  );
}
