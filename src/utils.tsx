import { client } from "./api";

export async function getAllProduct() {
  const { data } = await client("/products");
  return data;
}

export async function getProduct(id: number | string) {
  const { data } = await client(`/products/${id}`);
  return data;
}
