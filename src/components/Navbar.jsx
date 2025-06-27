import { Link, useNavigate } from "react-router-dom";
import { getToken, isLoggedIn, removeToken } from "../utils/auth";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!getToken();

  const handleLogout = () => {
    removeToken();
    navigate("/customer/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">GreenVegShop</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/products" className="navbar-link">
          Products
        </Link>
        {/* <Link to="/orders" className="navbar-link">
          Orders
        </Link> */}
        {isLoggedIn ? (
          <>
            <Link to="/cart" className="navbar-link">
              Cart
            </Link>
            <Link to="/customer/login" className="navbar-link">
              My Orders
            </Link>
          </>
        ) : (
          <>
            <Link to="/customer/signup" className="navbar-link">
              Signup
            </Link>
            <Link to="/customer/login" className="navbar-link">
              Login
            </Link>
          </>
        )}

        {isLoggedIn && getUserRole() === "user" && (
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        )}

        {/* <Link to="/admin/login" className="navbar-link">
          Admin
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
