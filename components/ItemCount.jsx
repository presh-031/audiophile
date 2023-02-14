import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../features/cart/cartSlice";

const ItemCount = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);

  return (
    <div className="flex gap-[1.6rem] ">
      <div className="flex items-center bg-[#f1f1f1] py-[0.5rem] text-[1.3rem] font-bold leading-[1.776rem]  tracking-[1px] ">
        <button className="px-[1.5rem] py-[1rem]">-</button>
        <p className="px-[0.5rem]">1</p>
        <button className="px-[1.5rem] py-[1rem]">+</button>
      </div>
      <div>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="bg-[#D87D4A] px-[3.5rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] text-white"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
