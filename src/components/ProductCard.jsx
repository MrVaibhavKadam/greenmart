const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
      <img
        src={product.image || "/default.png"}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <div>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
