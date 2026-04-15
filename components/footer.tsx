import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.2-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12 lg:py-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-medium mb-3">
            Zapisz się i odbierz 10% zniżki
          </h3>
          <p className="text-sm text-white/70 mb-6 max-w-md mx-auto">
            Zostań pierwszą, która dowie się o nowych kolekcjach i ekskluzywnych ofertach.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Twój adres e-mail"
              className="flex-1 bg-transparent border-b border-white/30 px-1 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="text-xs tracking-[0.2em] uppercase border-b border-white px-3 py-2.5 hover:text-accent-soft hover:border-accent-soft transition-colors"
            >
              Zapisz
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-xl tracking-[0.2em] font-medium mb-3">JOMIX</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Odzież damska szyta w Polsce. Naturalne tkaniny, ponadczasowe kroje.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com"
                className="p-2 border border-white/20 hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 border border-white/20 hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Kup"
            links={[
              { label: "Sukienki", href: "/kategoria/sukienki" },
              { label: "Bluzki", href: "/kategoria/bluzki" },
              { label: "Komplety", href: "/kategoria/komplety" },
              { label: "Marynarki", href: "/kategoria/marynarki" },
              { label: "Promocje", href: "/kategoria/promocje" },
            ]}
          />

          <FooterCol
            title="Pomoc"
            links={[
              { label: "Dostawa", href: "/dostawa" },
              { label: "Zwroty i wymiany", href: "/zwroty" },
              { label: "Tabela rozmiarów", href: "/tabela-rozmiarow" },
              { label: "FAQ", href: "/faq" },
              { label: "Kontakt", href: "/kontakt" },
            ]}
          />

          <FooterCol
            title="Jomix"
            links={[
              { label: "O nas", href: "/o-nas" },
              { label: "Szyjemy w Polsce", href: "/produkcja" },
              { label: "Regulamin", href: "/regulamin" },
              { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
              { label: "Karta podarunkowa", href: "/karta-podarunkowa" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Jomix. Wszystkie prawa zastrzeżone.</div>
          <div className="flex gap-3 items-center">
            <span>Płatności:</span>
            <span className="tracking-wider">Przelewy24</span>
            <span className="text-white/20">·</span>
            <span>Dostawa:</span>
            <span className="tracking-wider">InPost</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs tracking-[0.2em] uppercase mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
