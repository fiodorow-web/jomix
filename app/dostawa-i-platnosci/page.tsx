import type { Metadata } from "next";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Dostawa i płatności – Jomix",
  description: "Informacje o dostawie i płatnościach w sklepie Jomix. Paczkomaty, kurier InPost, odbiór osobisty.",
};

export default function DostawaPage() {
  return (
    <StaticPageLayout title="Dostawa i płatności">
      <h2>Metody dostawy</h2>
      <table>
        <thead>
          <tr>
            <th>Sposób dostawy</th>
            <th>Czas realizacji</th>
            <th>Koszt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paczkomat InPost</td>
            <td>2–3 dni robocze</td>
            <td>14,99 zł</td>
          </tr>
          <tr>
            <td>Kurier InPost</td>
            <td>1–2 dni robocze</td>
            <td>17,99 zł</td>
          </tr>
          <tr>
            <td>Odbiór osobisty — Mordy</td>
            <td>W godzinach pracy</td>
            <td>Gratis</td>
          </tr>
        </tbody>
      </table>

      <h2>Darmowa dostawa</h2>
      <p>
        Przy zamówieniach od <strong>299 zł</strong> dostawa Paczkomatem i kurierem
        InPost jest <strong>gratis</strong>.
      </p>

      <h2>Realizacja zamówienia</h2>
      <p>
        Zamówienia złożone do godziny 14:00 w dni robocze są wysyłane tego samego dnia.
        Zamówienia złożone po tej godzinie lub w weekendy — następnego dnia roboczego.
      </p>

      <h2>Śledzenie przesyłki</h2>
      <p>
        Po nadaniu paczki otrzymasz na e-mail numer śledzenia InPost.
        Status przesyłki możesz sprawdzić w aplikacji InPost Mobile
        lub na stronie inpost.pl.
      </p>

      <h2>Płatności</h2>
      <p>
        Płatności obsługuje bezpieczna bramka <strong>Przelewy24</strong> (PayPro S.A.).
        Dostępne metody:
      </p>
      <ul>
        <li>BLIK</li>
        <li>Przelew online (wszystkie banki)</li>
        <li>Karta płatnicza (Visa, Mastercard)</li>
      </ul>
      <p>
        Transakcje są szyfrowane i w pełni bezpieczne.
        Nie przechowujemy danych Twojej karty.
      </p>
    </StaticPageLayout>
  );
}
