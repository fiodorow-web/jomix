import type { Metadata } from "next";
import { StaticPageLayout } from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: "Tabela rozmiarów – Jomix",
  description: "Tabele rozmiarów odzieży Jomix. Wymiary sukienek, bluzek, spodni i marynarek.",
};

const dressSizes = [
  { size: "XS", bust: "80–84", waist: "62–66", hips: "88–92" },
  { size: "S", bust: "84–88", waist: "66–70", hips: "92–96" },
  { size: "M", bust: "88–92", waist: "70–74", hips: "96–100" },
  { size: "L", bust: "92–96", waist: "74–78", hips: "100–104" },
  { size: "XL", bust: "96–100", waist: "78–82", hips: "104–108" },
  { size: "XXL", bust: "100–106", waist: "82–88", hips: "108–114" },
];

const topSizes = [
  { size: "XS", bust: "80–84", waist: "62–66", hips: "86–90" },
  { size: "S", bust: "84–88", waist: "66–70", hips: "90–94" },
  { size: "M", bust: "88–92", waist: "70–74", hips: "94–98" },
  { size: "L", bust: "92–96", waist: "74–78", hips: "98–102" },
  { size: "XL", bust: "96–100", waist: "78–82", hips: "102–106" },
  { size: "XXL", bust: "100–106", waist: "82–88", hips: "106–112" },
];

const bottomSizes = [
  { size: "XS", waist: "62–66", hips: "88–92" },
  { size: "S", waist: "66–70", hips: "92–96" },
  { size: "M", waist: "70–74", hips: "96–100" },
  { size: "L", waist: "74–78", hips: "100–104" },
  { size: "XL", waist: "78–82", hips: "104–108" },
  { size: "XXL", waist: "82–88", hips: "108–114" },
];

export default function TabelaRozmiarowPage() {
  return (
    <StaticPageLayout title="Tabela rozmiarów">
      <p>
        Wszystkie wymiary podane są w centymetrach. Przy każdym produkcie
        znajdziesz też indywidualną tabelę dopasowaną do konkretnego fasonu.
      </p>

      <h2>Jak się mierzyć?</h2>
      <ul>
        <li><strong>Obwód biustu</strong> — mierz w najszerszym miejscu klatki piersiowej, na wysokości brodawek.</li>
        <li><strong>Obwód talii</strong> — mierz w najwęższym miejscu tułowia.</li>
        <li><strong>Obwód bioder</strong> — mierz w najszerszym miejscu bioder, ok. 20 cm poniżej talii.</li>
      </ul>
      <p>
        Taśma miernicza powinna przylegać do ciała, ale nie uciskać.
        Mierz się w bieliźnie.
      </p>

      <h2>Sukienki i komplety</h2>
      <SizeTable
        headers={["Rozmiar", "Biust (cm)", "Talia (cm)", "Biodra (cm)"]}
        rows={dressSizes.map((s) => [s.size, s.bust, s.waist, s.hips])}
      />

      <h2>Bluzki i marynarki</h2>
      <SizeTable
        headers={["Rozmiar", "Biust (cm)", "Talia (cm)", "Biodra (cm)"]}
        rows={topSizes.map((s) => [s.size, s.bust, s.waist, s.hips])}
      />

      <h2>Spódnice i spodnie</h2>
      <SizeTable
        headers={["Rozmiar", "Talia (cm)", "Biodra (cm)"]}
        rows={bottomSizes.map((s) => [s.size, s.waist, s.hips])}
      />

      <p>
        Masz wątpliwości? Napisz do nas na{" "}
        <a href="mailto:kontakt@jomix.pl">kontakt@jomix.pl</a> — pomożemy
        dobrać idealny rozmiar.
      </p>
    </StaticPageLayout>
  );
}

function SizeTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
