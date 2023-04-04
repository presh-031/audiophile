import { useEffect, useState } from "react";

import Image from "next/image";
import ButtonOne from "./ButtonOne";

const ProductItem = ({ item }) => {
  console.log(item);
  console.log(item.image.tablet);
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

  return (
    <div className="outline">
      {/* check tablet images */}
      <Image
        // .slice(1) to remove the initial '.' in the filepath string the json returns
        // so that the filepath referenced starts with a '/', as the assets are in the public folder.
        src={image.slice(1)}
        alt="product"
        height={352}
        width={327}
        className="mb-[3.2rem] sm:mb-[5.2rem] sm:h-[32.2rem] "
      />
      <div className="flex flex-col  items-center gap-[2.4rem] text-center outline sm:mx-auto sm:w-[85%] sm:gap-0">
        {item.new && (
          <p className="text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[1rem] text-[#d87d4a] outline sm:mb-[1.6rem]">
            new product
          </p>
        )}
        <p className=" text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[0.1rem] outline sm:mb-[3.2rem] sm:text-[4rem] sm:leading-[4.4rem] sm:tracking-[0.143rem]">
          {item.name}
        </p>
        <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50 sm:mb-[2.4rem]">
          {item.description}
        </p>
        <ButtonOne url={`/${item.category}/${item.slug}`} />
      </div>
    </div>
  );
};

export default ProductItem;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
