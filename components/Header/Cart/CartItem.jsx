import Image from "next/image";

const CartItem = ({ id, image, name, price, quantity }) => {
  console.log(id, image, name, price, quantity);
  return (
    <div>
      <div>
        <Image />
      </div>
      <div>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <div className="flex items-center bg-[#f1f1f1] py-[0.5rem] text-[1.3rem] font-bold leading-[1.776rem]  tracking-[1px] ">
        <button className="px-[1.5rem] py-[1rem]">-</button>
        <p className="px-[0.5rem]">{quantity}</p>
        <button className="px-[1.5rem] py-[1rem]">+</button>
      </div>
    </div>
  );
};

export default CartItem;
