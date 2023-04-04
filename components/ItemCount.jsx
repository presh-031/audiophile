import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../features/cart/cartSlice";

import { addToCart } from "../features/cart/cartSlice";

const ItemCount = ({ item }) => {
  const dispatch = useDispatch();

  // To get quantity in cart
  const cart = useSelector((state) => state.cart);

  // To get specific cart item in ui
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);

  const handleDecrementBtnClick = () => {
    dispatch(decrementQuantity(item.id));
  };

  const handleIncrementBtnClick = () => {
    // since quantity is initially 0, clicking + should add 1 to cart just like the 'add to cart btn'.
    // Once quantity is more than 0, then it should increment normally.
    // item should be a cartItem, not directly, so we get access to quantity.

    if (cartItem) {
      dispatch(incrementQuantity(item.id));
    } else {
      dispatch(addToCart(item));
    }
  };

  return (
    <div className="flex gap-[1.6rem] ">
      <div className="flex items-center bg-[#f1f1f1] py-[0.5rem] text-[1.3rem] font-bold leading-[1.776rem]  tracking-[.1rem] ">
        <button
          onClick={handleDecrementBtnClick}
          className="px-[1.5rem] py-[1rem] outline"
        >
          -
        </button>
        <p className="px-[0.5rem] outline">
          {cartItem ? cartItem.quantity : 0}
        </p>
        <button
          onClick={handleIncrementBtnClick}
          className="px-[1.5rem] py-[1rem] outline"
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="bg-[#D87D4A] px-[3.5rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
