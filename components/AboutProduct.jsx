import Image from "next/image";
import ItemCount from "./ItemCount";

const AboutProduct = ({ product, image }) => {
  return (
    <div className="mb-[8.80rem] outline sm:mb-[12rem] sm:flex sm:gap-[1%] min-[700px]:gap-[10%]">
      <Image src={image.slice(1)} alt="product" height={327} width={327} />
      <div className="pt-[7.8rem] pb-[4.5rem] outline">
        {product.new && (
          <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[1rem] text-[#d87d4a] sm:mb-[1.7rem] sm:text-[1.2rem] sm:leading-[1.6rem] sm:tracking-[0.85rem]">
            new product
          </p>
        )}
        <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[.1rem] sm:mb-[3.2rem] sm:leading-[3.2rem]">
          {product.name}
        </p>
        <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] opacity-50 sm:mb-[3.2rem]">
          {product.description}
        </p>
        <p className="mb-[3.1rem] text-[1.80rem] font-bold leading-[2.459rem] tracking-[.129rem]">
          ${product.price}
        </p>
        <ItemCount item={product} />
      </div>
    </div>
  );
};

export default AboutProduct;
