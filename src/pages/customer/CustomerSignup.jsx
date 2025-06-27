import { useState } from "react";
import axios from "../../utils/axiosInstances";
import { useNavigate } from "react-router-dom";
import "../../styles/CustomerSignup.css";

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pinCode: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/customer/auth/signup", formData);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert("Error: " + err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Customer Signup</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {["name", "email", "phone", "address", "pinCode", "password"].map(
            (field) => (
              <input
                key={field}
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="signup-input"
                required
              />
            )
          )}
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <a href="/customer/login" className="signup-link">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default CustomerSignup;
