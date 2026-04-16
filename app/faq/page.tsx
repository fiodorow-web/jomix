import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageLayout } from "@/components/static-page-layout";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Najczęściej zadawane pytania – Jomix",
  description: "Odpowiedzi na najczęstsze pytania dotyczące zamówień, dostawy, zwrotów i produktów Jomix.",
};

const FAQ_ITEMS = [
  {
    q: "Jak dobrać rozmiar?",
    a: 'Sprawdź naszą <a href="/tabela-rozmiarow">tabelę rozmiarów</a>. Przy każdym produkcie znajdziesz też indywidualną tabelę z wymiarami. Jeśli masz wątpliwości — napisz do nas, chętnie pomożemy.',
  },
  {
    q: "Ile trwa dostawa?",
    a: "Paczkomat InPost: 2–3 dni robocze. Kurier InPost: 1–2 dni robocze. Zamówienia złożone do 14:00 wysyłamy tego samego dnia.",
  },
  {
    q: "Czy mogę zwrócić produkt?",
    a: "Tak, masz 14 dni na zwrot od daty otrzymania przesyłki. Produkt musi być nieużywany, z metkami. Szczegóły na stronie Zwroty i reklamacje.",
  },
  {
    q: "Jakie metody płatności są dostępne?",
    a: "Obsługujemy płatności przez Przelewy24: BLIK, przelew online, karta płatnicza (Visa, Mastercard).",
  },
  {
    q: "Czy dostawa jest darmowa?",
    a: "Tak, przy zamówieniach od 299 zł dostawa Paczkomatem i kurierem InPost jest gratis. Odbiór osobisty w Mordach jest zawsze bezpłatny.",
  },
  {
    q: "Z jakich materiałów są wasze ubrania?",
    a: "Pracujemy głównie z lnem, bawełną i wiskozą — naturalnymi tkaninami, które oddychają i pięknie się układają.",
  },
  {
    q: "Czy produkujecie w Polsce?",
    a: "Tak, wszystkie produkty Jomix szyte są w polskiej szwalni. Stawiamy na lokalną produkcję i kontrolę jakości.",
  },
  {
    q: 'Jak mogę się z wami skontaktować?',
    a: 'Napisz na <a href="mailto:kontakt@jomix.pl">kontakt@jomix.pl</a> lub skorzystaj z formularza na stronie <a href="/kontakt">kontakt</a>. Odpowiadamy w ciągu 24 godzin w dni robocze.',
  },
];

export default function FAQPage() {
  return (
    <StaticPageLayout title="Najczęściej zadawane pytania">
      <p>
        Znajdziesz tu odpowiedzi na najczęstsze pytania dotyczące zamówień,
        dostawy, zwrotów i naszych produktów.
      </p>

      <FAQAccordion items={FAQ_ITEMS} />

      <p className="mt-8">
        Nie znalazłaś odpowiedzi? <Link href="/kontakt">Napisz do nas</Link> — chętnie pomożemy.
      </p>
    </StaticPageLayout>
  );
}
