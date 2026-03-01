export const dynamic = "force-dynamic";
import { ProductType } from "@/types/types";

// get all products
export const getProducts = async (): Promise<ProductType[]> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();

  return data;
};

// get product by id
export const getSpecificProduct = async (
  id: string,
): Promise<ProductType | { notFound: true }> => {
  const specificProduct = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/${id}`,
    { next: { tags: ["product", `product-${id}`] } },
  );

  if (!specificProduct.ok) {
    return { notFound: true };
  }

  return await specificProduct.json();
};
