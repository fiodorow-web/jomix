export type ColorVariant = {
  name: string;
  hex: string;
  images: string[];
};

export type SizeOption = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  badge?: "NOWOŚĆ" | "SALE" | "BESTSELLER";
  colors: ColorVariant[];
  sizes: { size: SizeOption; inStock: boolean }[];
  material: string;
  description: string;
  details: string[];
  care: string[];
  modelInfo?: string;
};

export type Category = {
  slug: string;
  name: string;
  image: string;
  href: string;
};
