import { cn } from "@/lib/cn";

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-border/60 animate-pulse rounded-none",
        className
      )}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Bone className="aspect-[3/4] w-full" />
      <div className="space-y-2">
        <Bone className="h-3 w-2/3" />
        <Bone className="h-3 w-1/3" />
        <Bone className="h-3 w-1/4" />
      </div>
    </div>
  );
}

export function CategoryPageSkeleton() {
  return (
    <>
      {/* Title skeleton */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pt-2 pb-6 lg:pt-4 lg:pb-10">
        <Bone className="h-10 lg:h-14 w-48" />
        <Bone className="h-4 w-28 mt-3" />
      </div>

      {/* Toolbar skeleton */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          <Bone className="h-9 w-24" />
          <Bone className="h-4 w-20 hidden sm:block" />
          <Bone className="h-9 w-36" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 gap-y-8 lg:gap-y-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export function ProductPageSkeleton() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-12 lg:pb-20">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-12">
        {/* Gallery */}
        <div className="lg:grid lg:grid-cols-[80px_1fr] lg:gap-4">
          <div className="hidden lg:flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Bone key={i} className="aspect-[3/4]" />
            ))}
          </div>
          <Bone className="aspect-[3/4] lg:aspect-auto lg:min-h-[600px] w-full -mx-4 lg:mx-0 w-screen lg:w-full" />
        </div>

        {/* Info */}
        <div className="space-y-5 pt-2">
          <Bone className="h-3 w-20" />
          <Bone className="h-8 w-3/4" />
          <Bone className="h-6 w-28" />
          <div className="flex gap-2 pt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Bone key={i} className="w-10 h-10 rounded-full" />
            ))}
          </div>
          <div className="grid grid-cols-6 gap-1.5 pt-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Bone key={i} className="h-11" />
            ))}
          </div>
          <Bone className="h-12 w-full mt-4" />
          <div className="space-y-3 pt-4 border-t border-border">
            {Array.from({ length: 4 }).map((_, i) => (
              <Bone key={i} className="h-12 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
