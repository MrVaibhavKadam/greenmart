import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  };

  const handleAddToCart = (product) => {
    const cartData = {
      product_id: product.id,
      customer_id: 1,
      quantity: 1,
      discount_price: product.price,
      mrp_price: product.mrp_price,
      total_price: product.price,
    };

    addToCart(cartData)
      .then(() => alert("Added To Cart..!"))
      .catch(() => alert("Failed to add to cart.!"));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
