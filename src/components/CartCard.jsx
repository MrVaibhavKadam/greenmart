const CartCard = ({ item, onDelete, onUpdate }) => {
  return (
    <div className="flex justify-between items-center border-b p-4">
      <div className="flex gap-4 items-center">
        <img
          src={item.product.image || "/default.png"}
          alt={item.product.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.product.name}</h3>
          <p className="text-sm text-gray-600">MRP: ₹{item.mrp_price}</p>
          <p className="text-green-600 font-bold">
            Discount: ₹{item.discount_price}
          </p>
          <p className="text-sm">Qty: {item.quantity}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
