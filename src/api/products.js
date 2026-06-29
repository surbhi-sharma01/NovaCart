import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export async function getAllProducts() {
  const { data } = await api.get("", {
    params: {
      limit: 194,
    },
  });

  return data.products;
}

export async function getProductById(productId) {
  const { data } = await api.get(`/${productId}`);
  return data;
}