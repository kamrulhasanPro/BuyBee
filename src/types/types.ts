export interface ProductType {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  brand: string;
  images: string[];
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  reviews: object;
  averageRating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
  stock: number;
  createdAt: string;
}
