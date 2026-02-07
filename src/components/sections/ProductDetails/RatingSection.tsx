import { Progress } from "@/components/ui/progress";
import { ProductType } from "@/types/types";
import { Star, StarIcon } from "lucide-react";
import React from "react";

const RatingSection = ({ product }: { product: ProductType }) => {
  const { reviews, title, averageRating } = product;
  const max = Math.max(...Object.values(reviews));
  return (
    <section>
      {/* title */}
      <div className="bg-cyan-300 py-2 px-4">
        <p>Ratings & Reviews of {title}</p>
      </div>

      {/* ratings & review */}
      <div className="flex flex-col sm:flex-row  gap-2 mt-5">
        {/* average */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 border-r border-gray-200">
          <p className="text-4xl">{averageRating}/5</p>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) =>
              averageRating > i + 1 ? (
                <StarIcon
                  className=""
                  fill="#FFAD33"
                  key={i}
                  size={52}
                  stroke="#FFAD33"
                />
              ) : (
                <StarIcon
                  key={i}
                  size={52}
                  stroke="rgba(0, 0, 0, 0)"
                  fill="rgba(0, 0, 0, 0.25)"
                />
              ),
            )}
          </div>
        </div>

        {/*  reviews details info */}
        <div className="flex-1 space-y-2">
          {[...Object.values(reviews)].reverse().map((value, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* Star */}
              <div className="flex items-center gap-1 bg-gray-200 p-1 rounded-md">
                <Star fill="#FFAD33" stroke="#FFAD33" size={45} />
              </div>

              {/* Progress */}
              <Progress
                value={(value / max) * 100}
                className="h-3 bg-muted [&>div]:bg-[rgba(245,201,10,1)]"
              />

              {/* Count */}
              <span className="w-8 text-sm text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
