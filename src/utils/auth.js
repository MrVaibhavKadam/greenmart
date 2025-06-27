export const saveToken = (token, isAdmin = false) => {
  if (isAdmin) {
    localStorage.setItem("adminToken", token);
  } else {
    localStorage.setItem("userToken", token);
  }
};

export const getToken = () => {
  return (
    localStorage.getItem("adminToken") || localStorage.getItem("userToken")
  );
};

export const removeToken = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("userToken");
};

export const isLoggedIn = () => {
  return !!getToken();
};

export const getUserRole = () => {
  if (localStorage.getItem("adminToken")) return "admin";
  if (localStorage.getItem("userToken")) return "user";
  return null;
};
