import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jomix – Sukienki z lnu, bawełny i wiskozy | Szyte w Polsce",
  description:
    "Odzież damska szyta w Polsce z naturalnych tkanin. Sukienki, bluzki, komplety, marynarki. Darmowa dostawa od 299 zł.",
  metadataBase: new URL("https://jomix.pl"),
  openGraph: {
    title: "Jomix – Szyjemy w Polsce",
    description: "Odzież damska z naturalnych tkanin.",
    type: "website",
    locale: "pl_PL",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jomix",
  url: "https://jomix.pl",
  logo: "https://jomix.pl/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "kontakt@jomix.pl",
    contactType: "customer service",
    availableLanguage: "Polish",
  },
  sameAs: [
    "https://www.instagram.com/jomix.pl",
    "https://www.facebook.com/jomix.pl",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jomix",
  url: "https://jomix.pl",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://jomix.pl/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
