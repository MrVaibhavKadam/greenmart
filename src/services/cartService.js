import axiosInstance from "../utils/axiosInstances";

export const getCartItems = async () => {
  response = await axiosInstance.get("/cartitems");
  return response.data;
};

export const addToCart = async (item) => {
  response = await axiosInstance.post("/cartitems", item);
  return response.data;
};

export const updateCartItem = async (id, item) => {
  response = await axiosInstance.put(`/cartitems/${id}`, item);
  return response.data;
};

export const deleteCartItem = async (id) => {
  response = await axiosInstance.delete(`/cartitems/${id}`);
  return response.data;
};
