export interface ProductType {
  _id: string;
  title: string;
  description: string;
  keyFeatures: string[];
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
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
export type CartStateType = {
  cart: CartItem[];
  favorite: string[];
};

export type CartAction =
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: "SET_FAVORITE"; payload: string[] }
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_TO_CART"; payload: { id: string } }
  | { type: "INCREASE_QTY"; payload: { id: string } }
  | { type: "DECREASE_QTY"; payload: { id: string } }
  | { type: "ADD_FAVORITE"; payload: { id: string } }
  | { type: "REMOVE_FAVORITE"; payload: { id: string } };

export interface UserType {
  name: string;
  email: string;
  password: string;
}
