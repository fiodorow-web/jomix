# Jomix — kontekst projektu

## O marce

**Jomix** — polska marka odzieży damskiej (jomix.pl).

- Kategorie: sukienki, bluzki, komplety, marynarki, spodnie, spódnice, czapki
- Materiały: len, bawełna, wiskoza (naturalne tkaniny)
- Produkcja: Polska ("Szyjemy w Polsce")
- Liczba produktów: **~86**
- Zakres cen: **69,99–289,99 zł**
- Punkt odbioru osobistego: Mordy

## Cel projektu

Migracja z **WordPress/WooCommerce** (jomix.pl) na **Shopify + custom Next.js storefront na Vercelu**.

Powody migracji:
- Obecna strona wolno się ładuje (WordPress + WP Full Picture builder = ciężki CSS/JS)
- Niska sprzedaż, prawdopodobnie przez słabą konwersję i SEO
- Potrzeba nowoczesnego UX porównywalnego z Zalando / Reserved

---

## Wybrany stack (decyzja 2026-04-15)

| Warstwa | Technologia | Koszt/mc |
|---|---|---|
| Commerce engine | **Shopify Basic** | ~105 zł (promo 79 zł przez 3 mies.) |
| Frontend | **Next.js 15** (App Router) + TypeScript | — |
| Hosting frontendu | **Vercel Hobby** (darmowy — zmienimy gdy Vercel zgłosi uwagi) | 0 zł |
| Styling | Tailwind CSS + shadcn/ui | 0 zł |
| Animacje | Framer Motion | 0 zł |
| Obrazy | next/image + Cloudinary (free tier) | 0 zł |
| Wyszukiwarka | Meilisearch albo Algolia (free tier) | 0 zł |
| Płatności | **Przelewy24** (Shopify Payments NIE działa w PL) | 1,7% + 0,49 zł/transakcja |
| Wysyłka | **InPost ShipX** przez Shopify app | ~40 zł/mc za app |
| Email transakcyjny | Resend (free tier) | 0 zł |
| Monitoring | UptimeRobot | 0 zł |
| Analytics | GA4 + Meta Pixel + Microsoft Clarity | 0 zł |
| Domena | jomix.pl (już posiadana) | ~8 zł |

**Total:** ~153 zł/mc + prowizja Shopify 2% od transakcji (bo brak Shopify Payments w PL) + prowizja P24 1,7%.

---

## Dlaczego Shopify, a nie Medusa self-host

Rozważano alternatywę **Medusa self-host na Hetznerze** (~125 zł/mc, brak prowizji 2%).

Ostatecznie wybrano **Shopify**, bo:
1. Przy obecnej niskiej sprzedaży prowizja 2% jest nieodczuwalna (~100 zł/mc przy obrocie 5k)
2. Zero stresu z utrzymaniem serwera — Shopify gwarantuje 99,99% uptime
3. Mobile admin do szybkich update'ów produktów
4. Prostszy onboarding dla właściciela (non-developer)
5. Koszt bazowy prawie identyczny jak Medusa (~120-150 zł/mc)

**Punkt przeglądu decyzji:** gdy obrót przekroczy **30 000 zł/mc przez 3 miesiące z rzędu** → przeliczyć migrację na Medusę self-host (oszczędność ~700 zł/mc zaczyna się opłacać).

---

## Zidentyfikowane problemy obecnego jomix.pl do naprawienia

### Krytyczne (zabijające konwersję)
- **Tylko 1 zdjęcie produktu** (potrzeba 6-10 z różnych ujęć + modelka w ruchu)
- **Brak tabeli rozmiarów** (bariera zakupowa #1 w odzieży)
- **Brak opinii/recenzji** (zero social proof)
- **"Powiązane produkty" to tylko linki do kategorii** (marnotrawstwo cross-sellu)
- **Brak Schema.org Product markup** (niewidoczność w Google Shopping)

### Średnie (UX i SEO)
- Zduplikowane menu w headerze
- SVG placeholdery przy ładowaniu zdjęć
- Brak bloga (tracony long-tail SEO)
- Słabe tagi: Title "Jomix – Sklep z odzieżą damską" (zbyt ogólne), H1 na homepage o konkretnym produkcie zamiast fraz kluczowych
- Brak FAQ w stopce

### Wydajność
- WordPress + WooCommerce + WP Full Picture = ciężki CSS/JS, wolne ładowanie

---

## Plan migracji produktów

1. **Eksport z WooCommerce** — WP All Export albo WC REST API (produkty, warianty, ceny, zdjęcia, kategorie)
2. **Mapowanie pól** — skrypt w Node.js przekształcający JSON z WC na format Shopify
3. **Import do Shopify** — Matrixify app albo natywny CSV import
4. **Upload zdjęć** — batch na Cloudinary z zachowaniem URL-i
5. **Redirecty 301** — KRYTYCZNE: `/produkt/{slug}/` na stare → nowe URL-e, żeby nie stracić pozycji w Google
6. **Sitemap.xml + Schema.org** — Product, Offer, BreadcrumbList, Organization
7. **Migracja DNS** — jomix.pl na Vercel

---

## Integracje

### Przelewy24
- Merchant account: już posiadany
- Docs: https://docs.przelewy24.pl/
- Integracja przez Shopify via Autopay gateway lub bezpośredni plugin P24

### InPost ShipX
- Docs: https://docs.shipx.pl/
- Opcje: Paczkomaty, Kurier, odbiór osobisty (Mordy)
- Start od **14,99 zł** za przesyłkę
- Shopify app dla InPost (płatna ~40 zł/mc)

### Obecne URL-e (do redirectów 301)
- Lista produktów: https://jomix.pl/product-sitemap.xml
- Wzór produktu: `jomix.pl/produkt/{slug}/`
- Wzór kategorii: `jomix.pl/kategoria/{slug}/`

---

## Strategia pracy (decyzja 2026-04-15)

**Kolejność:**
1. **Najpierw frontend mobile-first** — budujemy nowy sklep (design + Next.js) na bazie placeholderów i testowych produktów
2. **Backend/Shopify zostawiamy na później** — obecny jomix.pl WordPress działa dalej i sprzedaje, nie ruszamy go
3. **Migracja Shopify + podpięcie** — dopiero gdy frontend jest gotowy i przetestowany
4. **Cutover DNS** — na końcu, jednym ruchem

Takie podejście daje zero przestoju w sprzedaży i pozwala iterować nad wyglądem bez stresu.

**Podejście UI:** mobile-first. Projektujemy i testujemy najpierw widok 375px (iPhone SE), potem skalujemy w górę.

## Timeline (szacowany)

| Tydzień | Zadanie |
|---|---|
| 1-2 | Projekt UI/UX w Figmie, design system |
| 3-5 | Frontend Next.js: homepage, lista, produkt, koszyk |
| 6-7 | Checkout + integracja P24 + InPost |
| 8 | Migracja produktów + redirecty 301 + testy |
| 9 | Soft launch, monitoring, poprawki |

---

## Co jeszcze warto rozważyć (opcjonalne inwestycje)

- **Profesjonalna sesja zdjęciowa** produktów (~1500-3000 zł) — największy ROI w odzieży
- **Odświeżenie brandingu** (logo, paleta) — opcjonalne
- **Blog z lookbookami** — stylizacje, porady, trendy sezonowe (długi ogon SEO)
- **Program lojalnościowy** (przy 500+ zamówień) — powtarzalne zakupy
