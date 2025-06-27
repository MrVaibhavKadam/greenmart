import axiosInstance from "../utils/axiosInstances";

const API_URL = "http://localhost:9090/api/products";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};
//axios.get(`${API_URL}/${id}`);

export const createProduct = async (product) => {
  const response = await axiosInstance.post("/products", product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axiosInstance.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};
