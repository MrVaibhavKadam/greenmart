import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstances";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMode, setPaymentMode] = useState("COD");
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get("/cart");
      setCartItems(response.data);
    } catch (err) {
      console.error("Failed to load cart items:", err);
    }
  };

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

  const placeOrder = async () => {
    try {
      await axiosInstance.post("/orders", {
        paymentMode,
      });
      alert("✅ Order placed successfully!");
      navigate("/my-orders"); // redirect to My Orders
    } catch (err) {
      alert("❌ Failed to place order!");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2">Product</th>
                <th className="text-left px-4 py-2">Qty</th>
                <th className="text-left px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.product.product}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">₹{item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mb-4">
            <label className="font-medium">Payment Mode:</label>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="ml-2 border px-2 py-1 rounded"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="ONLINE">Online Payment</option>
            </select>
          </div>

          <h3 className="text-xl font-semibold">
            Grand Total: ₹{calculateTotal()}
          </h3>

          <button
            onClick={placeOrder}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
