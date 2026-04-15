import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductDetails } from "@/components/product-details";
import { SectionHeader } from "@/components/section-header";
import { ProductCarousel } from "@/components/product-carousel";
import { UspStrip } from "@/components/usp-strip";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produkt — Jomix" };
  return {
    title: `${product.name} — Jomix`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: product.category,
            href: `/kategoria/${product.categorySlug}`,
          },
          { label: product.name },
        ]}
      />
      <ProductDetails product={product} />

      <UspStrip />

      {related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <SectionHeader
            eyebrow="Może Ci się spodobać"
            title="Podobne produkty"
            linkHref={`/kategoria/${product.categorySlug}`}
            linkLabel="Zobacz wszystkie"
          />
          <ProductCarousel products={related} />
        </section>
      )}
    </>
  );
}
