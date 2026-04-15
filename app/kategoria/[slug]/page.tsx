import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CategoryView } from "@/components/category-view";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const virtuals = ["promocje", "nowosci", "bestsellery"];
  return [
    ...categories.map((c) => ({ slug: c.slug })),
    ...virtuals.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Kategoria — Jomix" };
  return {
    title: `${category.name} — Jomix`,
    description: `${category.name} — odzież damska szyta w Polsce z naturalnych tkanin.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(slug);

  return (
    <>
      <Breadcrumbs items={[{ label: category.name }]} />
      <CategoryView products={items} categoryName={category.name} />
    </>
  );
}
