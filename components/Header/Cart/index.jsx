import "reactjs-popup/dist/index.css";

import { useDispatch, useSelector } from "react-redux";

import { emptyCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import Popup from "reactjs-popup";
import cartIcon from "../../../assets/shared/desktop/icon-cart.svg";
import CartItem from "./CartItem";

const Cart = ({ close }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

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
    <Popup
      trigger={
        <div className="relative">
          <Image src={cartIcon} alt="cart" />
          <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
            {getTotalQuantity() || 0}
          </p>
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div></div>
        // <div className=" my-popup-overlay my-popup-content my-popup-arrow rounded-xl bg-white px-[2.8rem] py-[3.2rem] outline">
        //   <div className="mb-[3.1rem] flex justify-between">
        //     <p className="text-[1.8rem] font-bold leading-[2.4590rem] tracking-[.129rem]">
        //       CART <span>({getTotal().totalQuantity})</span>
        //     </p>
        //     <p
        //       onClick={() => {
        //         dispatch(emptyCart());
        //         // setCartIsOpen((prevCartIsOpen) => !prevCartIsOpen);
        //       }}
        //       className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50 hover:underline"
        //     >
        //       Remove all
        //     </p>
        //   </div>
        //   {cart?.map((item) => (
        //     <CartItem
        //       key={item.id}
        //       id={item.id}
        //       image={item.image}
        //       name={item.name}
        //       price={item.price}
        //       quantity={item.quantity}
        //     />
        //   ))}
        //   <div className="mt-[3.2rem] mb-[2.4rem] flex justify-between ">
        //     <p className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50">
        //       TOTAL
        //     </p>
        //     <p className="text-[1.80rem] font-bold leading-[2.4rem]">
        //       ${getTotal().totalPrice}
        //     </p>
        //   </div>
        //   <button className="w-full bg-[#D87D4A] bg-[] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline">
        //     CHECKOUT
        //   </button>
        // </div>
      )}
    </Popup>
  );
};

export default Cart;
