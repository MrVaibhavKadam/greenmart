import { useState } from "react";
import axios from "../../utils/axiosInstances";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/auth";
import "../../styles/CustomerLogin.css";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/customer/auth/login", { email, password });
      saveToken(res.data.token);
      alert("Login successful!");
      navigate("/products"); // redirect to user product page
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="customer-login-container">
      <h2 className="customer-login-title">Customer Login</h2>
      <form onSubmit={handleLogin} className="customer-login-form">
        <input
          type="email"
          placeholder="Email"
          className="customer-login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="customer-login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="customer-login-button">Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;
