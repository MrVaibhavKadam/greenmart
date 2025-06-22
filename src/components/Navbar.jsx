import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-3 shadow-md flex justify-between">
      <div className="font-bold text-xl">GreenVegShop</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-200">
          Products
        </Link>
        <Link to="/orders" className="hover:text-gray-200">
          Orders
        </Link>
        <Link to="/cart" className="hover:text-gray-200">
          Cart
        </Link>
        <Link to="/admin" className="hover:text-gray-200">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
