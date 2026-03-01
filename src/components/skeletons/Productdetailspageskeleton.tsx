// ─── ProductDetailsCard Skeleton ─────────────────────────────────────────────

const ProductDetailsCardSkeleton = () => {
  return (
    <section className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product image */}
        <figure className="flex-1 bg-[#FFFAFA] flex items-center justify-center rounded-xl min-h-[300px]">
          <div className="w-[400px] h-[400px] max-w-full bg-muted rounded-lg" />
        </figure>

        {/* Product text details */}
        <div className="flex-1 space-y-3">
          {/* Title */}
          <div className="h-7 bg-muted rounded w-3/4" />

          {/* Rating & stock row */}
          <div className="flex items-center gap-2 my-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-muted rounded-sm" />
              ))}
            </div>
            <div className="h-4 bg-muted rounded w-32" />
            <div className="h-4 bg-muted rounded w-16" />
          </div>

          {/* Price */}
          <div className="h-7 bg-muted rounded w-20 mb-6" />

          {/* Description lines */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
          </div>

          {/* Brand */}
          <div className="h-4 bg-muted rounded w-28" />

          <hr className="my-2 border-muted" />

          {/* Key Features */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-24 font-semibold" />
            <div className="space-y-1.5 ml-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3.5 bg-muted rounded w-5/6" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: action + delivery */}
      <div className="flex flex-col-reverse md:flex-row gap-6 mt-4">
        {/* ProductAction placeholder */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-9 bg-muted rounded w-24" />
            <div className="h-9 bg-muted rounded w-9" />
          </div>
          <div className="h-11 bg-muted rounded w-full" />
          <div className="h-11 bg-muted rounded w-full" />
        </div>

        {/* Delivery box placeholder */}
        <div className="flex-1 flex gap-4 items-center mt-4">
          <div className="w-12 h-12 bg-muted rounded-full shrink-0" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-24" />
            <div className="h-3 bg-muted rounded w-48" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── RatingSection Skeleton ───────────────────────────────────────────────────

const RatingSectionSkeleton = () => {
  return (
    <section className="animate-pulse">
      {/* Title bar */}
      <div className="bg-muted py-2 px-4 h-10 rounded" />

      {/* Ratings & review body */}
      <div className="flex flex-col sm:flex-row gap-2 mt-5">
        {/* Average score side */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 border-r border-muted pr-4">
          <div className="h-10 w-16 bg-muted rounded" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-muted rounded-sm" />
            ))}
          </div>
        </div>

        {/* Bar breakdown side */}
        <div className="flex-1 space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-14 h-14 bg-muted rounded-md shrink-0" />
              <div className="flex-1 h-3 bg-muted rounded-full" />
              <div className="w-8 h-4 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Full Page Skeleton ───────────────────────────────────────────────────────

const ProductDetailsPageSkeleton = () => {
  return (
    <div className="space-y-10">
      <ProductDetailsCardSkeleton />
      <RatingSectionSkeleton />
    </div>
  );
};

export { ProductDetailsCardSkeleton, RatingSectionSkeleton };
export default ProductDetailsPageSkeleton;