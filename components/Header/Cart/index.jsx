import React from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <div className="absolute right-[25px] top-[90px] left-[25px] outline outline-red-800">
      <div>
        <p>
          CART <span>({})</span>
        </p>
        <p>Remove all</p>
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
