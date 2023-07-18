import Image from "next/image";
import ItemCount from "./ItemCount";
import { useState } from "react";
import Loader from "./Loader";

const AboutProduct = ({ product, image }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="mb-[8.80rem]  sm:mb-[12rem] sm:flex sm:gap-[1%] min-[700px]:gap-[10%] lg:mb-[16rem] lg:items-center">
      <div
        className={` ${
          isLoading ? "flex  items-center justify-center" : ""
        } h-[32.7rem] w-[32.7rem] sm:h-[48rem] sm:min-w-[28.1rem] lg:h-[56rem] lg:min-w-[49%]`}
      >
        {isLoading && <Loader />}
        <Image
          src={image.slice(1)}
          alt="product"
          height={327}
          width={327}
          // onLoad={handleImageLoad}
          onLoadingComplete={handleImageLoad}
          className="mx:auto sm:h-[48rem] sm:w-[28.1rem] lg:h-[56rem] lg:w-full"
        />
      </div>

      <div className="pt-[7.8rem] pb-[4.5rem]  lg:p-0">
        {product.new && (
          <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[1rem] text-[#d87d4a] sm:mb-[1.7rem] sm:text-[1.2rem] sm:leading-[1.6rem] sm:tracking-[0.85rem] lg:m-0 lg:mb-[1.6rem]">
            new product
          </p>
        )}
        <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[.1rem] sm:mb-[3.2rem] sm:leading-[3.2rem] lg:mb-[3.2rem] lg:text-[4rem] lg:leading-[4.4rem] lg:tracking-[0.14rem]">
          {product.name}
        </p>
        <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] opacity-50 sm:mb-[3.2rem] lg:mb-[3.2rem]">
          {product.description}
        </p>
        <p className="mb-[3.1rem] text-[1.80rem] font-bold leading-[2.459rem] tracking-[.129rem] lg:mb-[4.7rem]">
          ${product.price}
        </p>
        <ItemCount item={product} />
      </div>
    </div>
  );
};

export default AboutProduct;
