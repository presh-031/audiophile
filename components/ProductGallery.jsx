import { useEffect, useState } from "react";

import Image from "next/image";

const ProductGallery = ({ gallery }) => {
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
  let firstImageSrc = "";
  let secondImageSrc = "";
  let thirdImageSrc = "";

  if (windowSize.innerWidth < 640) {
    // mobile
    firstImageSrc = gallery.first.mobile.slice(1);
    secondImageSrc = gallery.second.mobile.slice(1);
    thirdImageSrc = gallery.third.mobile.slice(1);
  } else if (windowSize.innerWidth < 769) {
    // tablet
    firstImageSrc = gallery.first.tablet.slice(1);
    secondImageSrc = gallery.second.tablet.slice(1);
    thirdImageSrc = gallery.third.tablet.slice(1);
  } else {
    // desktop
    firstImageSrc = gallery.first.desktop.slice(1);
    secondImageSrc = gallery.second.desktop.slice(1);
    thirdImageSrc = gallery.third.desktop.slice(1);
  }

  return (
    <div className="mt-[8.8rem] mb-[12rem] outline sm:mt-[15.3rem] sm:flex sm:gap-[1.8rem] lg:mb-[16rem] lg:mt-[16rem] lg:gap-[3rem]">
      <div className="border border-red-800 sm:flex sm:flex-1 sm:flex-col sm:gap-[2rem] lg:w-[40%] lg:flex-none lg:gap-[3.2rem]">
        <Image
          src={firstImageSrc}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl sm:mb-0 sm:w-full lg:h-full"
        />

        <Image
          src={secondImageSrc}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl sm:mb-0 sm:w-full lg:h-full"
        />
      </div>

      <Image
        src={thirdImageSrc}
        alt="product-image"
        width={327}
        height={368}
        className=" rounded-xl sm:flex-1 "
      />
    </div>
  );
};

export default ProductGallery;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
