import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstances";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axiosInstance.get("/orders/customer");
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2">Order No</th>
                <th className="text-left px-4 py-2">Product</th>
                <th className="text-left px-4 py-2">Qty</th>
                <th className="text-left px-4 py-2">Total</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-left px-4 py-2">Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-2">{order.orderNo}</td>
                  <td className="px-4 py-2">{order.productName}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">₹{order.productTotalPrice}</td>
                  <td className="px-4 py-2">{order.orderStatus}</td>
                  <td className="px-4 py-2">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{order.paymentMode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
