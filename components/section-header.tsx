import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  linkHref?: string;
  linkLabel?: string;
};

export function SectionHeader({ eyebrow, title, linkHref, linkLabel }: Props) {
  return (
    <div className="flex items-end justify-between gap-6 mb-6 lg:mb-8">
      <div>
        {eyebrow && (
          <div className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">{title}</h2>
      </div>
      {linkHref && (
        <Link
          href={linkHref}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors whitespace-nowrap"
        >
          {linkLabel || "Zobacz wszystkie"}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
