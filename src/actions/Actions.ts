import { ProductType } from "@/types/types";

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/data/Products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();

  return data;
};

export const getSpecificProduct = async (id: string) => {
  const products = await getProducts();

  const specificProduct = products.find((item: ProductType) => item.id === id);

  if (!specificProduct) {
    return "Not Found This Product";
  }

  return specificProduct;
};
