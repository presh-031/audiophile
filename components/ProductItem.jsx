import { useEffect, useState } from "react";

import Image from "next/image";
import Loader from "./Loader";
import Link from "next/link";

const ProductItem = ({ item, reverse = false }) => {
  // Logic to handle window resizing
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Image src will vary based on the device width
  let image = "";

  if (windowSize.innerWidth < 640) {
    // mobile
    image = item.image.mobile;
  } else if (windowSize.innerWidth < 769) {
    // tablet
    image = item.image.tablet;
  } else {
    // desktop
    image = item.image.desktop;
  }

  // Logic for image loader
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div
      className={`${reverse ? "lg:flex-row-reverse" : ""} lg:flex lg:h-[56rem]`}
    >
      {/* check tablet images */}
      <div className="mb-[3.2rem] flex bg-[#f1f1f1]  sm:mb-[5.2rem] lg:m-0 lg:flex lg:w-1/2 lg:items-center">
        {isLoading && (
          <div className=" mx-auto flex h-[35.2rem] w-full items-center justify-center  sm:mb-[5.2rem] md:h-[56.2rem] lg:h-[35.2rem]  ">
            <Loader />
          </div>
        )}
        <Image
          // .slice(1) to remove the initial '.' in the filepath string the json returns
          // so that the filepath referenced starts with a '/', as the assets are in the public folder.
          src={image.slice(1)}
          alt="product"
          height={352}
          width={327}
          onLoad={handleImageLoad}
          className={`
          ${isLoading ? "h-0 w-0" : ""}
           mx-auto sm:mb-[5.2rem]  lg:object-cover`}
        />
      </div>

      <div
        className={` ${
          reverse ? "lg:pr-[11.26%]" : "lg:pl-[11.26%]"
        } flex flex-col items-center justify-center gap-[2.4rem] text-center  sm:mx-auto sm:w-[85%]  sm:gap-0 lg:w-1/2 lg:items-start  lg:text-left`}
      >
        {item.new && (
          <p className="text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[1rem] text-[#d87d4a]  sm:mb-[1.6rem]">
            new product
          </p>
        )}
        <p className=" text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[0.1rem]  sm:mx-auto sm:mb-[3.2rem] sm:w-[80%] sm:text-[4rem] sm:leading-[4.4rem] sm:tracking-[0.143rem] lg:w-full">
          {item.name}
        </p>
        <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50 sm:mb-[2.4rem] lg:mb-[4rem]">
          {item.description}
        </p>{" "}
        <Link
          href={`/${item.category}/${item.slug}`}
          className={`inline bg-[#D87D4A] px-[3.15rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em]  text-white hover:bg-[#FBAF85] sm:w-fit`}
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
