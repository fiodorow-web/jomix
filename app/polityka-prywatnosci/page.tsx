import type { Metadata } from "next";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Polityka prywatności – Jomix",
  description: "Polityka prywatności sklepu Jomix. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <StaticPageLayout title="Polityka prywatności">
      <p>
        Ochrona Twoich danych osobowych jest dla nas priorytetem. Poniżej
        znajdziesz informacje o tym, jakie dane zbieramy, w jakim celu
        i na jakiej podstawie prawnej je przetwarzamy.
      </p>

      <h2>1. Administrator danych</h2>
      <p>
        Administratorem danych osobowych jest właściciel marki Jomix,
        prowadzący sklep internetowy pod adresem jomix.pl.
        Kontakt: <a href="mailto:kontakt@jomix.pl">kontakt@jomix.pl</a>.
      </p>

      <h2>2. Jakie dane zbieramy</h2>
      <ul>
        <li>Dane podane przy składaniu zamówienia: imię, nazwisko, adres, e-mail, telefon.</li>
        <li>Dane techniczne: adres IP, typ przeglądarki, czas wizyty (zbierane automatycznie).</li>
        <li>Dane z plików cookies — szczegóły w sekcji „Pliki cookies".</li>
      </ul>

      <h2>3. Cel przetwarzania</h2>
      <ul>
        <li>Realizacja zamówień i obsługa klienta (art. 6 ust. 1 lit. b RODO).</li>
        <li>Wypełnianie obowiązków prawnych, np. księgowość (art. 6 ust. 1 lit. c RODO).</li>
        <li>Marketing bezpośredni — wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO).</li>
        <li>Analiza ruchu na stronie — w celach statystycznych (art. 6 ust. 1 lit. f RODO).</li>
      </ul>

      <h2>4. Okres przechowywania</h2>
      <p>
        Dane przechowujemy przez okres niezbędny do realizacji celów,
        dla których zostały zebrane — nie dłużej niż wymaga tego prawo
        (np. dokumenty księgowe: 5 lat).
      </p>

      <h2>5. Twoje prawa</h2>
      <p>Masz prawo do:</p>
      <ul>
        <li>Dostępu do swoich danych.</li>
        <li>Sprostowania lub usunięcia danych.</li>
        <li>Ograniczenia przetwarzania.</li>
        <li>Przenoszenia danych.</li>
        <li>Sprzeciwu wobec przetwarzania.</li>
        <li>Cofnięcia zgody w dowolnym momencie.</li>
        <li>Złożenia skargi do Prezesa UODO.</li>
      </ul>

      <h2>6. Pliki cookies</h2>
      <p>
        Strona używa plików cookies w celu zapewnienia prawidłowego
        działania serwisu oraz analizy statystycznej. Przy pierwszej
        wizycie zapytamy Cię o zgodę na cookies analityczne i marketingowe.
        Cookies niezbędne do działania sklepu nie wymagają zgody.
      </p>

      <h2>7. Odbiorcy danych</h2>
      <p>
        Dane mogą być przekazywane podmiotom współpracującym w celu
        realizacji zamówienia:
      </p>
      <ul>
        <li>InPost — realizacja dostawy.</li>
        <li>Przelewy24 (PayPro S.A.) — obsługa płatności.</li>
        <li>Shopify — platforma e-commerce.</li>
      </ul>

      <p className="mt-8 text-xs">
        Polityka prywatności obowiązuje od dnia 16.04.2026 r.
      </p>
    </StaticPageLayout>
  );
}
