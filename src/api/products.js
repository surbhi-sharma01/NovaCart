import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}?limit=194`);
  return response.data.products;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
