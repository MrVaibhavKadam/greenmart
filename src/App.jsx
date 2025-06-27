import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Public Pages
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

//Customer pages
import CustomerSignup from "./pages/customer/CustomerSignup.jsx";
import CustomerLogin from "./pages/customer/CustomerLogin.jsx";
import CustomerPrivateRoute from "./routes/CustomerPrivateRoute";
import CustomerProfilePage from "./pages/customer/CustomerProfilePage.jsx";

import CheckoutPage from "./pages/CheckoutPage";
import MyOrdersPage from "./pages/customer/MyOrdersPage.jsx";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ProductsPage from "./pages/admin/ProductsPage.jsx";
import OrdersPage from "./pages/admin/OrdersPage.jsx";
import CustomersPage from "./pages/admin/CustomersPage.jsx";
import FeedbackPage from "./pages/admin/FeedbackPage.jsx";
import ContactPage from "./pages/admin/ContactPage.jsx";

// Private Route
import PrivateRoute from "./routes/PrivateRoutes.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          <Route path="admin/login" element={<LoginPage />} />

          {/* Customer Routes */}
          <Route path="customer/signup" element={<CustomerSignup />} />
          <Route path="customer/login" element={<CustomerLogin />} />

          <Route
            path="/profile"
            element={
              <CustomerPrivateRoute>
                <CustomerProfilePage />
              </CustomerPrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <CustomerPrivateRoute>
                <CartPage />
              </CustomerPrivateRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <CustomerPrivateRoute>
                <CheckoutPage />
              </CustomerPrivateRoute>
            }
          />

          <Route
            path="/customer/my-orders"
            element={
              <CustomerPrivateRoute>
                <MyOrdersPage />
              </CustomerPrivateRoute>
            }
          />

          {/* Admin Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <PrivateRoute>
                <OrdersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <PrivateRoute>
                <CustomersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/feedback"
            element={
              <PrivateRoute>
                <FeedbackPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/contact"
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
