import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-[120px] lg:text-[180px] font-medium leading-none text-border select-none">
        404
      </div>
      <h1 className="text-2xl lg:text-3xl font-medium tracking-tight mt-4 mb-3">
        Strona nie istnieje
      </h1>
      <p className="text-sm text-muted max-w-sm mb-8 leading-relaxed">
        Wygląda na to, że ta strona przeniosła się albo nigdy nie istniała.
        Sprawdź URL lub wróć do sklepu.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wide hover:bg-accent transition-colors"
        >
          Strona główna
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/kategoria/sukienki"
          className="inline-flex items-center justify-center px-6 py-3 text-sm border border-border hover:border-foreground transition-colors"
        >
          Przeglądaj sukienki
        </Link>
      </div>
    </div>
  );
}
