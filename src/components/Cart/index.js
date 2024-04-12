import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItems from "../ListItems";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">Cart Page</h1>
      <div className="flex justify-center">
        <div className="w-6/12">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg mb-6"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1 className="font-semibold text-red-600">
              Cart is empty. Add items to the cart!
            </h1>
          )}
          <ListItems data={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
