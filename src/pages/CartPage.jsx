import { useEffect, useState } from "react";
import { getCartItems, deleteCartItem } from "../services/cartService";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = () => {
    getCartItems()
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Error fetching cart", err));
  };

  const handleDelete = (id) => {
    deleteCartItem(id)
      .then(() => fetchCartItems())
      .catch((err) => console.error("Error deleting item", err));
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.total_price || 0);
    }, 0);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} onDelete={handleDelete} />
          ))}
          <div className="text-right mt-6 text-xl font-bold">
            Total: ₹{calculateTotal()}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
