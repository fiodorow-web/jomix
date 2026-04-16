"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="mt-6 divide-y divide-border">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-medium"
      >
        {question}
        <ChevronDown
          className={cn(
            "w-4 h-4 flex-shrink-0 ml-4 transition-transform text-muted",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div
          className="pb-4 text-sm text-muted leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
