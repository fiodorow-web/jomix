import type { Product, Category, SizeOption, SizeGuideRow } from "./types";

const dressSizes: SizeGuideRow[] = [
  { size: "XS", bust: "80–84", waist: "62–66", hips: "88–92" },
  { size: "S",  bust: "84–88", waist: "66–70", hips: "92–96" },
  { size: "M",  bust: "88–92", waist: "70–74", hips: "96–100" },
  { size: "L",  bust: "92–96", waist: "74–78", hips: "100–104" },
  { size: "XL", bust: "96–100", waist: "78–82", hips: "104–108" },
  { size: "XXL", bust: "100–106", waist: "82–88", hips: "108–114" },
];

const topSizes: SizeGuideRow[] = [
  { size: "XS", bust: "80–84", waist: "62–66", hips: "86–90" },
  { size: "S",  bust: "84–88", waist: "66–70", hips: "90–94" },
  { size: "M",  bust: "88–92", waist: "70–74", hips: "94–98" },
  { size: "L",  bust: "92–96", waist: "74–78", hips: "98–102" },
  { size: "XL", bust: "96–100", waist: "78–82", hips: "102–106" },
  { size: "XXL", bust: "100–106", waist: "82–88", hips: "106–112" },
];

const bottomSizes: SizeGuideRow[] = [
  { size: "XS", bust: "—", waist: "62–66", hips: "88–92" },
  { size: "S",  bust: "—", waist: "66–70", hips: "92–96" },
  { size: "M",  bust: "—", waist: "70–74", hips: "96–100" },
  { size: "L",  bust: "—", waist: "74–78", hips: "100–104" },
  { size: "XL", bust: "—", waist: "78–82", hips: "104–108" },
  { size: "XXL", bust: "—", waist: "82–88", hips: "108–114" },
];

const img = (seed: string) => `https://picsum.photos/seed/${seed}/900/1200`;

const gallery = (base: string) => [
  img(`${base}-1`),
  img(`${base}-2`),
  img(`${base}-3`),
  img(`${base}-4`),
];

const allSizes: SizeOption[] = ["XS", "S", "M", "L", "XL", "XXL"];

const defaultSizes = (outOfStock: SizeOption[] = []) =>
  allSizes.map((s) => ({ size: s, inStock: !outOfStock.includes(s) }));

export const products: Product[] = [
  {
    id: "1",
    slug: "lniana-sukienka-emma",
    name: "Lniana sukienka Emma",
    category: "Sukienki",
    categorySlug: "sukienki",
    price: 129.99,
    badge: "NOWOŚĆ",
    material: "55% len, 45% wiskoza",
    description:
      "Lekka, zwiewna sukienka midi z naturalnej mieszanki lnu i wiskozy. Idealna na letnie dni — oddycha, nie gniecie się nadmiernie i świetnie układa się na sylwetce. Delikatny dekolt V i dopasowany w talii fason podkreślają kobiecą linię.",
    details: [
      "Długość midi",
      "Dekolt V",
      "Dopasowana w talii, rozkloszowany dół",
      "Krótki rękaw bufiasty",
      "Ukryty suwak z boku",
    ],
    care: [
      "Prać w temperaturze 30°C",
      "Nie wybielać",
      "Prasować w niskiej temperaturze",
      "Nie suszyć w suszarce bębnowej",
    ],
    modelInfo: "Modelka ma 172 cm wzrostu, prezentuje rozmiar S",
    sizeGuide: dressSizes,
    colors: [
      { name: "Beż", hex: "#d6c3a5", images: gallery("emma-bez") },
      { name: "Biały", hex: "#f5f1ea", images: gallery("emma-bialy") },
      { name: "Oliwkowy", hex: "#6b7353", images: gallery("emma-oliwka") },
    ],
    sizes: defaultSizes(["XS", "XXL"]),
  },
  {
    id: "2",
    slug: "sukienka-doris",
    name: "Sukienka Doris",
    category: "Sukienki",
    categorySlug: "sukienki",
    price: 189.99,
    compareAtPrice: 249.99,
    badge: "SALE",
    material: "100% bawełna",
    description:
      "Elegancka sukienka koktajlowa z gęstej, satynowej bawełny. Prosty krój w kształcie litery A z delikatnym marszczeniem przy dekolcie. Sprawdzi się zarówno w pracy, jak i na wieczór.",
    details: [
      "Długość midi",
      "Dekolt okrągły",
      "Rękaw 3/4",
      "Kieszenie po bokach",
      "Zapinana na zamek z tyłu",
    ],
    care: ["Prać w temperaturze 40°C", "Prasować w średniej temperaturze"],
    modelInfo: "Modelka ma 175 cm wzrostu, prezentuje rozmiar M",
    sizeGuide: dressSizes,
    colors: [
      { name: "Czarny", hex: "#1a1a1a", images: gallery("doris-czarny") },
      { name: "Kremowy", hex: "#ede4d3", images: gallery("doris-kremowy") },
    ],
    sizes: defaultSizes(["XXL"]),
  },
  {
    id: "3",
    slug: "bluzka-basic",
    name: "Bluzka Basic",
    category: "Bluzki",
    categorySlug: "bluzki",
    price: 69.99,
    material: "100% bawełna",
    description:
      "Podstawowa bluzka o oversize'owym kroju z wysokiej jakości bawełny organicznej. Pasuje do wszystkiego — od jeansów po spódnice maxi.",
    details: [
      "Krój oversize",
      "Okrągły dekolt",
      "Krótki rękaw",
      "Bawełna organiczna GOTS",
    ],
    care: ["Prać w temperaturze 30°C", "Można suszyć w suszarce"],
    sizeGuide: topSizes,
    colors: [
      { name: "Biały", hex: "#ffffff", images: gallery("basic-bialy") },
      { name: "Czarny", hex: "#1a1a1a", images: gallery("basic-czarny") },
      { name: "Beż", hex: "#d6c3a5", images: gallery("basic-bez") },
      { name: "Liliowy", hex: "#c3b0cf", images: gallery("basic-liliowy") },
    ],
    sizes: defaultSizes(),
  },
  {
    id: "4",
    slug: "komplet-costa",
    name: "Komplet Costa",
    category: "Komplety",
    categorySlug: "komplety",
    price: 289.99,
    badge: "NOWOŚĆ",
    material: "55% len, 45% wiskoza",
    description:
      "Dwuczęściowy komplet w letnim klimacie — luźna koszula i szerokie spodnie z paskiem. Można nosić razem lub rozbijać na osobne elementy.",
    details: [
      "Koszula z krótkim rękawem",
      "Spodnie z wysokim stanem",
      "Szerokie nogawki",
      "Pasek w zestawie",
    ],
    care: ["Prać w temperaturze 30°C", "Prasować w niskiej temperaturze"],
    modelInfo: "Modelka ma 172 cm wzrostu, prezentuje rozmiar S",
    sizeGuide: dressSizes,
    colors: [
      { name: "Piaskowy", hex: "#c9b291", images: gallery("costa-piaskowy") },
      { name: "Oliwkowy", hex: "#6b7353", images: gallery("costa-oliwka") },
    ],
    sizes: defaultSizes(["XS", "XXL"]),
  },
  {
    id: "5",
    slug: "marynarka-iris",
    name: "Marynarka Iris",
    category: "Marynarki",
    categorySlug: "marynarki",
    price: 239.99,
    material: "100% wiskoza",
    description:
      "Klasyczna marynarka z miękkiej, lejącej się wiskozy. Dopasowany krój z podwójnym zapięciem i kieszeniami z patkami.",
    details: [
      "Dopasowany krój",
      "Podwójne zapięcie na guziki",
      "Klasyczne klapy",
      "Dwie kieszenie z patkami",
      "Podszewka z wiskozy",
    ],
    care: ["Czyszczenie chemiczne", "Nie prać w pralce"],
    sizeGuide: topSizes,
    colors: [
      { name: "Beż", hex: "#d6c3a5", images: gallery("iris-bez") },
      { name: "Czarny", hex: "#1a1a1a", images: gallery("iris-czarny") },
      { name: "Grafit", hex: "#4a4a4a", images: gallery("iris-grafit") },
    ],
    sizes: defaultSizes(["XXL"]),
  },
  {
    id: "6",
    slug: "spodnie-lniane-nora",
    name: "Spodnie lniane Nora",
    category: "Spodnie",
    categorySlug: "spodnie",
    price: 159.99,
    badge: "BESTSELLER",
    material: "100% len",
    description:
      "Luźne spodnie z czystego lnu z wysokim stanem i szerokimi nogawkami. Idealne na upalne dni — len świetnie reguluje temperaturę ciała.",
    details: [
      "Wysoki stan",
      "Szerokie nogawki",
      "Gumka w pasie",
      "Kieszenie boczne",
    ],
    care: ["Prać w temperaturze 30°C", "Można prasować mokre"],
    sizeGuide: bottomSizes,
    colors: [
      { name: "Biały", hex: "#f5f1ea", images: gallery("nora-bialy") },
      { name: "Beż", hex: "#d6c3a5", images: gallery("nora-bez") },
    ],
    sizes: defaultSizes(),
  },
  {
    id: "7",
    slug: "sukienka-letnia-molly",
    name: "Letnia sukienka Molly",
    category: "Sukienki",
    categorySlug: "sukienki",
    price: 149.99,
    material: "100% wiskoza",
    description:
      "Zwiewna sukienka na ramiączkach we wzorzysty print. Perfekcyjna na wakacje i letnie spotkania.",
    details: [
      "Długość mini",
      "Wiązane ramiączka",
      "Dopasowany biust, rozkloszowany dół",
      "Wzór kwiatowy",
    ],
    care: ["Prać w temperaturze 30°C", "Prasować na odwrotnej stronie"],
    sizeGuide: dressSizes,
    colors: [
      { name: "Kwiatowy", hex: "#e0a89d", images: gallery("molly-kwiat") },
      { name: "Błękitny", hex: "#a8bcc9", images: gallery("molly-blekit") },
    ],
    sizes: defaultSizes(["XXL"]),
  },
  {
    id: "8",
    slug: "spodnica-midi-lena",
    name: "Spódnica midi Lena",
    category: "Spódnice",
    categorySlug: "spodnice",
    price: 119.99,
    compareAtPrice: 159.99,
    badge: "SALE",
    material: "100% bawełna",
    description:
      "Spódnica midi z miękkiej bawełny w kształcie litery A. Uniwersalna baza garderoby, pasująca do każdej bluzki.",
    details: [
      "Długość midi",
      "Krój A",
      "Podszewka",
      "Ukryty suwak z boku",
    ],
    care: ["Prać w temperaturze 30°C"],
    sizeGuide: bottomSizes,
    colors: [
      { name: "Czarny", hex: "#1a1a1a", images: gallery("lena-czarny") },
      { name: "Brąz", hex: "#8b6f4e", images: gallery("lena-braz") },
    ],
    sizes: defaultSizes(["XS"]),
  },
];

export const categories: Category[] = [
  { slug: "sukienki", name: "Sukienki", image: img("cat-sukienki"), href: "/kategoria/sukienki" },
  { slug: "bluzki", name: "Bluzki", image: img("cat-bluzki"), href: "/kategoria/bluzki" },
  { slug: "komplety", name: "Komplety", image: img("cat-komplety"), href: "/kategoria/komplety" },
  { slug: "marynarki", name: "Marynarki", image: img("cat-marynarki"), href: "/kategoria/marynarki" },
  { slug: "spodnie", name: "Spodnie", image: img("cat-spodnie"), href: "/kategoria/spodnie" },
  { slug: "spodnice", name: "Spódnice", image: img("cat-spodnice"), href: "/kategoria/spodnice" },
];

export const menuStructure = [
  {
    label: "Sukienki",
    href: "/kategoria/sukienki",
    columns: [
      {
        title: "Według materiału",
        links: [
          { label: "Lniane", href: "/kategoria/sukienki?material=len" },
          { label: "Bawełniane", href: "/kategoria/sukienki?material=bawelna" },
          { label: "Wiskozowe", href: "/kategoria/sukienki?material=wiskoza" },
        ],
      },
      {
        title: "Według długości",
        links: [
          { label: "Maxi", href: "/kategoria/sukienki?dlugosc=maxi" },
          { label: "Midi", href: "/kategoria/sukienki?dlugosc=midi" },
          { label: "Mini", href: "/kategoria/sukienki?dlugosc=mini" },
        ],
      },
      {
        title: "Okazje",
        links: [
          { label: "Codzienne", href: "/kategoria/sukienki?okazja=codzienne" },
          { label: "Do pracy", href: "/kategoria/sukienki?okazja=praca" },
          { label: "Koktajlowe", href: "/kategoria/sukienki?okazja=koktajlowe" },
        ],
      },
    ],
    feature: {
      image: img("menu-sukienki"),
      title: "Wiosna 2026",
      href: "/kolekcja/wiosna-2026",
    },
  },
  {
    label: "Bluzki",
    href: "/kategoria/bluzki",
    columns: [
      {
        title: "Materiał",
        links: [
          { label: "Lniane", href: "/kategoria/bluzki?material=len" },
          { label: "Bawełniane", href: "/kategoria/bluzki?material=bawelna" },
          { label: "Wiskozowe", href: "/kategoria/bluzki?material=wiskoza" },
        ],
      },
      {
        title: "Fason",
        links: [
          { label: "Oversize", href: "/kategoria/bluzki?fason=oversize" },
          { label: "Dopasowane", href: "/kategoria/bluzki?fason=dopasowane" },
          { label: "Z długim rękawem", href: "/kategoria/bluzki?rekaw=dlugi" },
        ],
      },
    ],
    feature: {
      image: img("menu-bluzki"),
      title: "Bluzki basic",
      href: "/kategoria/bluzki?typ=basic",
    },
  },
  { label: "Komplety", href: "/kategoria/komplety" },
  { label: "Marynarki", href: "/kategoria/marynarki" },
  { label: "Spodnie", href: "/kategoria/spodnie" },
  { label: "Spódnice", href: "/kategoria/spodnice" },
  { label: "Promocje", href: "/kategoria/promocje", accent: true },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "promocje") {
    return products.filter((p) => p.compareAtPrice);
  }
  if (categorySlug === "nowosci") {
    return products.filter((p) => p.badge === "NOWOŚĆ");
  }
  if (categorySlug === "bestsellery") {
    return products.filter((p) => p.badge === "BESTSELLER");
  }
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  const virtual: Record<string, string> = {
    promocje: "Promocje",
    nowosci: "Nowości",
    bestsellery: "Bestsellery",
  };
  if (virtual[slug]) {
    return {
      slug,
      name: virtual[slug],
      image: img(`cat-${slug}`),
      href: `/kategoria/${slug}`,
    };
  }
  return categories.find((c) => c.slug === slug);
}
