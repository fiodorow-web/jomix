import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ProductCarousel } from "@/components/product-carousel";
import { CategoryGrid } from "@/components/category-grid";
import { UspStrip } from "@/components/usp-strip";
import { EditorialBanner } from "@/components/editorial-banner";
import { products } from "@/data/products";

export default function Home() {
  const newArrivals = products
    .filter((p) => p.badge === "NOWOŚĆ" || !p.compareAtPrice)
    .slice(0, 6);
  const bestsellers = [...products].reverse().slice(0, 6);
  const saleItems = products.filter((p) => p.compareAtPrice);

  return (
    <>
      <Hero />
      <UspStrip />

      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <SectionHeader
          eyebrow="Zakupy"
          title="Kategorie"
          linkHref="/sklep"
          linkLabel="Wszystko"
        />
        <CategoryGrid />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-14 lg:pb-20">
        <SectionHeader
          eyebrow="Świeże"
          title="Nowości"
          linkHref="/kategoria/nowosci"
        />
        <ProductCarousel products={newArrivals} />
      </section>

      <EditorialBanner />

      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <SectionHeader
          eyebrow="Pokochały je klientki"
          title="Bestsellery"
          linkHref="/kategoria/bestsellery"
        />
        <ProductCarousel products={bestsellers} />
      </section>

      {saleItems.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-14 lg:pb-20">
          <SectionHeader
            eyebrow="Do -40%"
            title="Promocje"
            linkHref="/kategoria/promocje"
          />
          <ProductCarousel products={saleItems} />
        </section>
      )}
    </>
  );
}
