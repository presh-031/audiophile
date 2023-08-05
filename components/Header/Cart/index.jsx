import { useDispatch, useSelector } from "react-redux";

import { emptyCart } from "@/features/cart/cartSlice";
import { CartItem } from "../../../index";
import { useRouter } from "next/router";
import { cartIsEmpty } from "@/helpers/toasts";

const Cart = ({ hideModal }) => {
  // cart logic
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

  const router = useRouter();
  const handleCheckoutBtnClick = () => {
    if (getTotal().totalQuantity) {
      hideModal();
      router.push("/checkout");
    } else {
      hideModal();
      cartIsEmpty();
    }
  };

  return (
    <div
      onClick={hideModal}
      className="overlay fixed left-0 top-0 z-[500] h-screen w-full bg-black bg-opacity-50"
    >
      <div className="wrapper fixed left-0 top-[14%] bottom-[10%] z-[1000] flex max-h-screen w-full justify-center overflow-y-auto overflow-x-hidden">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" modal relative z-[1000] h-fit rounded-[0.8rem] bg-white px-[2.8rem] py-[3.2rem] min-[600px]:left-[11rem] sm:left-[12rem] min-[650px]:left-[11rem] min-[660px]:left-[13rem] min-[700px]:left-[15rem]   min-[750px]:left-[18rem] min-[800px]:left-[20rem]  min-[840px]:left-[22rem] min-[880px]:left-[24rem] min-[920px]:left-[26rem] min-[950px]:left-[28rem] min-[1000px]:left-[30rem] lg:left-[32rem]"
        >
          <div className="mb-[3.1rem] flex justify-between">
            <p className="text-[1.8rem] font-bold leading-[2.4590rem] tracking-[.129rem]">
              CART <span>({getTotal().totalQuantity})</span>
            </p>
            <p
              onClick={() => {
                dispatch(emptyCart());
                hideModal();
              }}
              className="cursor-pointer text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50 hover:text-[#D87D4A] hover:underline"
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

          <button
            role="button"
            onClick={handleCheckoutBtnClick}
            className="w-full bg-[#D87D4A] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline hover:bg-[#FBAF85]"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
