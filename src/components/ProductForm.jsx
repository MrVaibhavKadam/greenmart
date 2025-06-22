import { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = {}, onCancle }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    image_name: "",
    price: "",
    mrp_price: "",
    product_category: "",
    product_quantity: "",
  });

  useEffect(() => {
    if (initialData) setProduct(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Selling Price"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="mrp_price"
        value={product.mrp_price}
        onChange={handleChange}
        placeholder="MRP Price"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="product_category"
        value={product.product_category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="product_quantity"
        value={product.product_quantity}
        onChange={handleChange}
        placeholder="Quantity"
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
