import {
  decrementQuantity,
  incrementQuantity,
} from "../../../features/cart/cartSlice";

import Image from "next/image";
import { useDispatch } from "react-redux";

const CartItem = ({ id, image, name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-[2.4rem] flex items-center gap-[1.6rem] ">
      <div>
        <Image src={image.mobile.slice(1)} alt="item" width={64} height={64} />
      </div>
      <div className=" flex flex-col font-bold  leading-[2.5rem]">
        <p className="w-[7rem] truncate text-[1.5rem] ">{name}</p>
        <p className="text-[1.4rem] font-medium opacity-50  ">${price}</p>
      </div>
      <div className="flex h-[3.2rem] items-center bg-[#f1f1f1] py-[0.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[1px]  sm:ml-[4rem] ">
        <div
          onClick={() => dispatch(decrementQuantity(id))}
          className="px-[1.5rem] py-[1rem] "
        >
          -
        </div>
        <p className="px-[0.5rem]">{quantity}</p>
        <div
          onClick={() => dispatch(incrementQuantity(id))}
          className="px-[1.5rem] py-[1rem] "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
