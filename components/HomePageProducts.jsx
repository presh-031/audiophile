import Link from "next/link";

const HomePageProducts = () => {
  return (
    <div className="mt-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem] sm:mt-[9.6rem] sm:gap-[3.2rem] sm:px-[4rem] lg:mt-[12rem] lg:gap-[4.8rem] xl:px-[16.5rem]">
      <div className="rounded-[8px] bg-[#d87d4a]  bg-pattern-circles bg-contain bg-top bg-no-repeat px-[2.4rem] py-[5.5rem] sm:py-[6.4rem] sm:pt-[5.2rem]  lg:flex lg:justify-between lg:pr-[7.5rem] lg:pl-[8.7rem] lg:pt-[9.6rem] lg:pb-0 min-[1360px]:pr-[9.5rem] min-[1360px]:pl-[11.7rem]">
        <div className="mb-[3.2rem]   sm:mb-[6.4rem] lg:m-0">
          <div className="mx-auto h-[20rem] w-[17.225rem] bg-zx9-speaker-mobile  bg-contain bg-center bg-no-repeat sm:h-[23.7rem] sm:w-[19.7rem] sm:bg-zx9-speaker-tablet lg:h-[49.3rem] lg:w-[41rem] lg:bg-zx9-speaker-desktop "></div>
        </div>
        <div className="text-center  sm:mx-auto sm:w-[34.9rem] lg:m-0 lg:text-left">
          <p className=" text-[3.6rem] font-bold leading-[4rem] tracking-[1.29px]  text-white sm:text-[5.6rem] sm:leading-[5.8rem] sm:tracking-[0.2rem] ">
            ZX9 SPEAKER
          </p>
          <p className="mt-[2.2rem] mb-[2.4rem]  text-[1.5rem] font-medium leading-[2.5rem] text-white sm:mt-[2.4rem] sm:mb-[4rem] ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="flex justify-center lg:justify-start">
            {/* <ButtonTwo url="/speakers/zx9-speaker" /> */}
            <Link
              href={"/speakers/zx9-speaker"}
              className={`inline px-[3.15rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] outline outline-[1px] outline-black hover:bg-[#4C4C4C] hover:text-white hover:outline-none sm:w-fit`}
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[32.99rem] rounded-[8px]  bg-zx7-speaker-mobile bg-cover bg-right  py-[10.1rem] px-[2.1rem]   sm:h-[32rem] sm:bg-zx7-speaker-tablet sm:px-[6.2rem] lg:bg-zx7-speaker-desktop">
        <p className="mb-[3.2rem] text-[2.80rem] font-bold leading-[3.8rem] tracking-[0.2rem]">
          ZX7 SPEAKER
        </p>
        <Link
          href={"/speakers/zx7-speaker"}
          className={`inline px-[3.15rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] outline outline-[1px] outline-black hover:bg-black hover:text-white hover:outline-none sm:w-fit`}
        >
          SEE PRODUCT
        </Link>
      </div>

      <div className="flex flex-col gap-[2.4rem]  sm:h-[32rem] sm:flex-row sm:gap-[1.1rem] lg:gap-[3rem]">
        <div className="h-[20rem] rounded-[8px] bg-yx1-earphones-mobile bg-contain sm:h-full sm:w-[50%]  sm:bg-yx1-earphones-tablet lg:bg-yx1-earphones-desktop "></div>
        <div className="rounded-[8px] bg-[#f1f1f1] py-[4.1rem] px-[2.4rem]  sm:flex sm:w-[50%] sm:flex-col sm:justify-center  sm:pl-[4.1rem] lg:pl-[9.5rem]">
          <p className="mb-[3.2rem] text-[3.2rem] font-bold leading-[3.82rem] tracking-[2px]">
            YX1 EARPHONES
          </p>
          <Link
            href={"/earphones/yx1-earphones"}
            className={`inline px-[3.15rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] outline outline-[1px] outline-black hover:bg-black hover:text-white hover:outline-none sm:w-fit`}
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
