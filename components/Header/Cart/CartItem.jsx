import Image from "next/image";

import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../../features/cart/cartSlice";

import { useDispatch } from "react-redux";

const CartItem = ({ id, image, name, price, quantity }) => {
  console.log(id, image, name, price, quantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-center gap-[1.6rem]">
      <div>
        <Image className="outline" alt="" width={64} height={64} />
      </div>
      <div className="flex flex-col  border-red-800 font-bold leading-[2.5rem]">
        <p className="w-[8rem] truncate text-[1.5rem] ">{name}</p>
        <p className="text-[1.4rem] font-medium opacity-50  ">${price}</p>
      </div>
      <div className="flex h-[3.2rem] items-center bg-[#f1f1f1] py-[0.5rem] text-[1.3rem] font-bold leading-[1.776rem]  tracking-[1px] ">
        <button
          onClick={() => dispatch(decrementQuantity(id))}
          className="px-[1.5rem] py-[1rem] outline"
        >
          -
        </button>
        <p className="px-[0.5rem]">{quantity}</p>
        <button
          onClick={() => dispatch(incrementQuantity(id))}
          //   onClick={handleClick}
          className="px-[1.5rem] py-[1rem] outline"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
