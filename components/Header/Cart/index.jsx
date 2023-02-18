import React from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <div className="absolute right-[25px] top-[90px] left-[25px] bg-white px-[2.8rem] py-[3.2rem] outline outline-red-800">
      <div className="mb-[3.1rem] flex justify-between">
        <p className="text-[1.8rem] font-bold leading-[2.4590rem] tracking-[.129rem]">
          CART <span>({})</span>
        </p>
        <p className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50 hover:underline">
          Remove all
        </p>
      </div>
      {cart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;
