export const dynamic = "force-dynamic";
import { ProductType } from "@/types/types";


export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/data/Products.json`, {cache: 'no-store'});

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
    return { notFound: true };
  }

  return specificProduct;
};
