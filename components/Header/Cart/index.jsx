import { useDispatch, useSelector } from "react-redux";

import { emptyCart } from "@/features/cart/cartSlice";
import CartItem from "./CartItem";

const Cart = ({ setCartIsOpen }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // Logic to get total items and price in cart
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <div
        onClick={() => {
          setCartIsOpen(false);
        }}
        className="modalBg absolute top-0 right-0 bottom-0  w-[100%] border border-red-800 bg-black bg-opacity-20 "
      ></div>
      <div className="absolute right-[25px] top-[24px] left-[25px] z-10 overflow-hidden rounded-xl bg-white px-[2.8rem] py-[3.2rem] outline">
        <div className="mb-[3.1rem] flex justify-between">
          <p className="text-[1.8rem] font-bold leading-[2.4590rem] tracking-[.129rem]">
            CART <span>({getTotal().totalQuantity})</span>
          </p>
          <p
            onClick={() => {
              dispatch(emptyCart());
              setCartIsOpen((prevCartIsOpen) => !prevCartIsOpen);
            }}
            className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50 hover:underline"
          >
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
        <div className="mt-[3.2rem] mb-[2.4rem] flex justify-between ">
          <p className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50">
            TOTAL
          </p>
          <p className="text-[1.80rem] font-bold leading-[2.4rem]">
            ${getTotal().totalPrice}
          </p>
        </div>
        <button className="w-full bg-[#D87D4A] bg-[] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline">
          CHECKOUT
        </button>
      </div>
    </>
  );
};

export default Cart;
