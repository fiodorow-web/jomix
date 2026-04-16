import type { Metadata } from "next";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "O nas – Jomix",
  description: "Poznaj markę Jomix. Odzież damska szyta w Polsce z naturalnych tkanin — len, bawełna, wiskoza.",
};

export default function ONasPage() {
  return (
    <StaticPageLayout title="O nas">
      <p>
        Jomix to polska marka odzieżowa stworzona z myślą o kobietach,
        które cenią naturalne tkaniny, wygodę i ponadczasowy styl.
      </p>

      <h2>Szyjemy w Polsce</h2>
      <p>
        Każdy produkt Jomix powstaje w polskiej szwalani. Stawiamy na lokalną
        produkcję, bo zależy nam na kontroli jakości na każdym etapie —
        od projektu po gotowy ubiór. Wspieramy polskie rzemiosło i dbamy
        o uczciwe warunki pracy.
      </p>

      <h2>Naturalne tkaniny</h2>
      <p>
        Pracujemy z lnem, bawełną i wiskozą — materiałami, które oddychają,
        są przyjemne w dotyku i pięknie się starzeją. Unikamy syntetyków,
        bo wierzymy, że ubranie powinno być dobre zarówno dla ciała,
        jak i dla planety.
      </p>

      <h2>Nasza filozofia</h2>
      <p>
        Nie podążamy za szybkimi trendami. Projektujemy kroje, które
        sprawdzą się przez wiele sezonów — klasyczne, kobiece, funkcjonalne.
        Kupujesz raz i nosisz przez lata.
      </p>

      <h2>Kto za tym stoi</h2>
      <p>
        Jomix to rodzinna marka z Mordów na Mazowszu. Zaczęliśmy od
        małej kolekcji sukienek lnianych i krok po kroku rozwijamy się,
        słuchając naszych klientek. Każda opinia jest dla nas cenna
        i wpływa na to, co tworzymy dalej.
      </p>
    </StaticPageLayout>
  );
}
