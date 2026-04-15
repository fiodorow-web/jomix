"use client";

import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "./cart-drawer";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
