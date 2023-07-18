import {
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";

import Image from "next/image";
import { useDispatch } from "react-redux";

const Item = ({ id, image, name, price, quantity }) => {
  // console.log(id, image, name, price, quantity);
  const dispatch = useDispatch();

  return (
    <div className="mb-[2.4rem] flex items-center gap-[1.6rem] ">
      <div>
        <Image src={image.mobile.slice(1)} alt="item" width={64} height={64} />
      </div>

      <div className=" flex flex-1 flex-col font-bold leading-[2.5rem]">
        <p className="w-[7rem] truncate text-[1.5rem] ">{name}</p>
        <p className="text-[1.4rem] font-medium opacity-50  ">${price}</p>
      </div>

      <p className=" text-[1.5rem] font-bold leading-[2.5rem] tracking-[1px] text-black  opacity-50 ">
        x{quantity}
      </p>
    </div>
  );
};

export default Item;
