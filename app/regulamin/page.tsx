import type { Metadata } from "next";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Regulamin – Jomix",
  description: "Regulamin sklepu internetowego Jomix. Warunki zakupów, płatności, dostawy i zwrotów.",
};

export default function RegulaminPage() {
  return (
    <StaticPageLayout title="Regulamin sklepu">
      <p>
        Niniejszy regulamin określa zasady korzystania ze sklepu internetowego Jomix
        dostępnego pod adresem jomix.pl.
      </p>

      <h2>§1. Definicje</h2>
      <ol>
        <li><strong>Sklep</strong> — sklep internetowy Jomix prowadzony pod adresem jomix.pl.</li>
        <li><strong>Sprzedawca</strong> — właściciel sklepu Jomix.</li>
        <li><strong>Klient</strong> — osoba fizyczna, prawna lub jednostka organizacyjna dokonująca zakupów w Sklepie.</li>
        <li><strong>Produkt</strong> — towar prezentowany w Sklepie.</li>
        <li><strong>Zamówienie</strong> — oświadczenie woli Klienta wyrażające wolę zawarcia umowy sprzedaży.</li>
      </ol>

      <h2>§2. Postanowienia ogólne</h2>
      <p>
        Sklep prowadzi sprzedaż odzieży damskiej za pośrednictwem sieci Internet.
        Wszystkie produkty oferowane w Sklepie są nowe i wolne od wad fizycznych i prawnych.
      </p>

      <h2>§3. Składanie zamówień</h2>
      <ol>
        <li>Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu.</li>
        <li>W celu złożenia zamówienia należy dodać produkty do koszyka i przejść do kasy.</li>
        <li>Złożenie zamówienia oznacza akceptację niniejszego Regulaminu.</li>
        <li>Po złożeniu zamówienia Klient otrzyma potwierdzenie na podany adres e-mail.</li>
      </ol>

      <h2>§4. Ceny i płatności</h2>
      <p>
        Ceny podane w Sklepie są cenami brutto (zawierają podatek VAT)
        i wyrażone są w złotych polskich. Cena podana przy produkcie jest wiążąca
        w chwili złożenia zamówienia.
      </p>
      <p>Dostępne metody płatności:</p>
      <ul>
        <li>Przelewy24 (BLIK, przelew online, karta płatnicza)</li>
      </ul>

      <h2>§5. Dostawa</h2>
      <p>
        Zamówienia realizowane są na terenie Polski. Szczegóły dotyczące
        kosztów i czasu dostawy znajdują się na stronie{" "}
        <a href="/dostawa-i-platnosci">Dostawa i płatności</a>.
      </p>

      <h2>§6. Prawo odstąpienia od umowy</h2>
      <p>
        Klient ma prawo odstąpić od umowy w ciągu 14 dni od dnia otrzymania
        przesyłki bez podania przyczyny. Szczegóły procedury zwrotu znajdują
        się na stronie <a href="/zwroty-i-reklamacje">Zwroty i reklamacje</a>.
      </p>

      <h2>§7. Reklamacje</h2>
      <p>
        Reklamacje dotyczące wad produktów można składać drogą mailową lub
        za pośrednictwem formularza kontaktowego. Sprzedawca rozpatrzy
        reklamację w ciągu 14 dni roboczych.
      </p>

      <h2>§8. Postanowienia końcowe</h2>
      <p>
        Sprzedawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą
        w życie z dniem ich opublikowania w Sklepie. Do zamówień złożonych
        przed zmianą stosuje się Regulamin obowiązujący w dniu złożenia zamówienia.
      </p>

      <p className="mt-8 text-xs">
        Regulamin obowiązuje od dnia 16.04.2026 r.
      </p>
    </StaticPageLayout>
  );
}
