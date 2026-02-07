import React from "react";
import { LucideIcon } from "lucide-react";
type CategoryType = {
  id: number;
  name: string;
  icon: LucideIcon;
  bg: string;
};

const CategoryCard = ({ category }: { category: CategoryType }) => {
  const { icon, name, bg } = category;
  const Icon = icon;
  return (
    <div className="px-1">
      <div
        className={`flex flex-col items-center justify-center p-6 rounded-md border border-gray-200 ${bg} opacity-80 hover:opacity-100 duration-300`}
      >
        <div>
          <Icon size={52} />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
