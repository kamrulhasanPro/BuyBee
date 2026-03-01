const ProductCardSkeleton = ({
  ratingShow = true,
}: {
  ratingShow?: boolean;
}) => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Image container */}
      <div className="bg-secondary rounded-lg overflow-hidden relative">
        {/* Discount badge placeholder */}
        <div className="absolute mt-3 ml-3 w-10 h-5 bg-muted rounded-sm" />

        {/* Image placeholder */}
        <figure className="p-3 flex items-center justify-center h-54">
          <div className="w-[200px] h-[200px] bg-muted rounded-md" />
        </figure>

        {/* Add to cart button placeholder */}
        <div className="w-full h-9 bg-muted" />
      </div>

      {/* Text content */}
      <div className="font-medium space-y-2">
        {/* Title */}
        <div className="h-4 bg-muted rounded w-3/4" />

        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="h-4 bg-muted rounded w-12" />
          <div className="h-4 bg-muted rounded w-16" />
        </div>

        {/* Rating */}
        {ratingShow && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-muted rounded-sm" />
            ))}
            <div className="w-8 h-4 bg-muted rounded ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardSkeleton;