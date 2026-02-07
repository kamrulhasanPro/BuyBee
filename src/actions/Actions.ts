export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/data/Products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();

  return data;
};
