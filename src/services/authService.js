import axios from "axios";

const BASE_URL = "http://localhost:9090/api/auth/admin";

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });
  return response.data;
};
