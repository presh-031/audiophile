import Image from "next/image";

const CartItem = ({ id, image, name, price, quantity }) => {
  console.log(id, image, name, price, quantity);
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
        <button className="px-[1.5rem] py-[1rem]">-</button>
        <p className="px-[0.5rem]">{quantity}</p>
        <button className="px-[1.5rem] py-[1rem]">+</button>
      </div>
    </div>
  );
};

export default CartItem;
