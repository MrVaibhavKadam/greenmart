import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/products">Products</NavLink>
      <NavLink to="/admin/orders">Orders</NavLink>
      <NavLink to="/admin/customers">Customers</NavLink>
      <NavLink to="/admin/feedback">Feedback</NavLink>
      <NavLink to="/admin/contact">Contact Us</NavLink>
    </div>
  );
};

export default Sidebar;
