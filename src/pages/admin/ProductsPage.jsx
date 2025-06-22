import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";
import Sidebar from "../../components/Sidebar";

const initialProduct = {
  product: "",
  description: "",
  image: "",
  image_name: "",
  name: "",
  price: "",
  mrp_price: "",
  product_category: "",
  product_quantity: "",
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialProduct);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const loadProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateProduct(editId, formData);
    } else {
      await createProduct(formData);
    }
    setFormData(initialProduct);
    setIsEditing(false);
    setEditId(null);
    loadProducts();
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[200px] p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3 bg-white p-6 rounded shadow-md"
        >
          {Object.keys(initialProduct).map((key) => (
            <input
              key={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={key.replaceAll("_", " ")}
              className="w-full px-3 py-2 border rounded"
              required
            />
          ))}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isEditing ? "Update Product" : "Add Product"}
          </button>
        </form>

        <h3 className="text-xl mt-6 mb-2 font-semibold">Product List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((prod) => (
            <div key={prod.id} className="bg-gray-100 p-4 rounded shadow-md">
              <h4 className="font-bold">{prod.product}</h4>
              <p>{prod.description}</p>
              <p>Price: ₹{prod.price}</p>
              <p>MRP: ₹{prod.mrp_price}</p>
              <p>Qty: {prod.product_quantity}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleEdit(prod)}
                  className="bg-yellow-500 px-3 py-1 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  className="bg-red-600 px-3 py-1 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
