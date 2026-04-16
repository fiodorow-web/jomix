import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function StaticPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-8 py-8 lg:py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Wróć do sklepu
      </Link>

      <h1 className="text-2xl lg:text-3xl font-medium mb-8">{title}</h1>

      <div className="prose-jomix">{children}</div>
    </div>
  );
}
