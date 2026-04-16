import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Zwroty i reklamacje – Jomix",
  description: "Zasady zwrotów i reklamacji w sklepie Jomix. 14 dni na zwrot, darmowy formularz.",
};

export default function ZwrotyPage() {
  return (
    <StaticPageLayout title="Zwroty i reklamacje">
      <h2>Prawo do zwrotu</h2>
      <p>
        Masz prawo odstąpić od umowy w ciągu <strong>14 dni</strong> od dnia
        otrzymania przesyłki, bez podawania przyczyny. Wystarczy, że poinformujesz
        nas o swojej decyzji przed upływem tego terminu.
      </p>

      <h2>Jak dokonać zwrotu?</h2>
      <ol>
        <li>Napisz do nas na <a href="mailto:kontakt@jomix.pl">kontakt@jomix.pl</a> z numerem zamówienia.</li>
        <li>Otrzymasz potwierdzenie przyjęcia zwrotu i adres do wysyłki.</li>
        <li>Zapakuj produkt w oryginalne opakowanie (lub inne bezpieczne) i nadaj przesyłkę.</li>
        <li>Zwrot pieniędzy nastąpi w ciągu 14 dni od otrzymania produktu przez nas.</li>
      </ol>

      <h2>Warunki zwrotu</h2>
      <ul>
        <li>Produkt nie może nosić śladów użytkowania.</li>
        <li>Musi posiadać oryginalne metki i oznaczenia.</li>
        <li>Koszt przesyłki zwrotnej ponosi Klient, chyba że zwrot wynika z wady produktu.</li>
      </ul>

      <h2>Wymiana rozmiaru</h2>
      <p>
        Chcesz wymienić rozmiar? Napisz do nas — pomożemy dobrać odpowiedni.
        Sprawdź naszą{" "}
        <Link href="/tabela-rozmiarow">tabelę rozmiarów</Link>,
        żeby dobrać idealny rozmiar przed zakupem.
      </p>

      <h2>Reklamacje</h2>
      <p>
        Jeśli otrzymany produkt ma wadę, przysługuje Ci prawo do reklamacji
        z tytułu rękojmi. Zgłoś reklamację mailowo lub przez formularz
        na stronie <Link href="/kontakt">kontakt</Link>.
        Rozpatrzymy ją w ciągu 14 dni roboczych.
      </p>

      <h2>Zwrot pieniędzy</h2>
      <p>
        Zwrot środków następuje na konto, z którego dokonano płatności.
        W przypadku płatności Przelewy24 — zwrot trafia na rachunek
        bankowy powiązany z kontem płatnika.
      </p>
    </StaticPageLayout>
  );
}
