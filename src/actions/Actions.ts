import { ProductType } from "@/types/types";

// get all products
export const getProducts = async ({
  search,
}: {
  search?: string | undefined;
} = {}): Promise<ProductType[]> => {
  console.log({ search, name: "action" });

  const url = search
    ? `${process.env.NEXTAUTH_URL}/api/products?search=${search}`
    : `${process.env.NEXTAUTH_URL}/api/products`;

  const res = await fetch(url, {
    ...(search ? { cache: "no-store" } : { next: { revalidate: 60 } }),
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
