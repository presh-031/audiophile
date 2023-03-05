import Image from "next/image";
import ItemCount from "./ItemCount";

const AboutProduct = ({ product, image }) => {
  return (
    <div className="mb-[8.80rem]">
      <Image
        src={image.slice(1)}
        alt="product-image"
        height={327}
        width={327}
      />
      <div>
        {product.new && (
          <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[10px] text-[#d87d4a]">
            new product
          </p>
        )}
        <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[1px]">
          {product.name}
        </p>
        <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
          {product.description}
        </p>
        <p className="mb-[3.1rem] text-[1.80rem] font-bold leading-[2.459rem] tracking-[1.29px]">
          ${product.price}
        </p>
        <ItemCount item={product} />
      </div>
    </div>
  );
};

export default AboutProduct;
