import { useEffect, useState } from "react";

import Image from "next/image";
import ButtonOne from "./ButtonOne";

const Comparables = ({ comparables }) => {
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

  return (
    // see mb
    <div className="mb-[17.2rem]   sm:mb-[12rem]">
      <p className="mb-[4rem] text-center text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.086rem]  sm:mb-[5.6rem] sm:text-[3.6rem] sm:tracking-[.114rem] ">
        YOU MAY ALSO LIKE
      </p>
      <div className=" sm:flex sm:gap-[2.15%] lg:gap-[2.7%]">
        {comparables.map((comparable) => {
          // Image src will vary based on the device width
          let image = "";

          if (windowSize.innerWidth < 640) {
            // mobile
            image = comparable.image.mobile;
          } else if (windowSize.innerWidth < 769) {
            // tablet
            image = comparable.image.tablet;
          } else {
            // desktop
            image = comparable.image.desktop;
          }
          return (
            <div
              key={comparable.slug}
              className="mb-[5.6rem] flex w-full flex-col items-center     sm:mb-0  "
            >
              <Image
                src={image.slice(1)}
                alt="product"
                width={372}
                height={120}
                className="mb-[3.2rem] rounded-[8px] min-[400px]:w-full sm:mb-[4rem]"
              />

              <p className="mb-[3.2rem] text-center text-[2.4rem] font-bold leading-[3.278rem] tracking-[.171rem]">
                {comparable.name}
              </p>
              <ButtonOne url={`/${comparable.category}/${comparable.slug}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comparables;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
