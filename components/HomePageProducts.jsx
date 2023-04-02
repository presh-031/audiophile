import ButtonTwo from "./ButtonTwo";

const HomePageProducts = () => {
  return (
    <div className="mt-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem] sm:mt-[9.6rem] sm:gap-[3.2rem] sm:px-[4rem]">
      <div className="bg-[#d87d4a] bg-pattern-circles bg-contain bg-top bg-no-repeat px-[2.4rem]  py-[5.5rem] sm:py-[6.4rem] sm:pt-[5.2rem]">
        <div className="mb-[3.2rem] outline  sm:mb-[6.4rem]">
          <div className="mx-auto h-[20rem] w-[17.225rem] border border-red-800 bg-zx9-speaker-mobile  bg-contain bg-center bg-no-repeat sm:h-[23.7rem] sm:w-[19.7rem] sm:bg-zx9-speaker-tablet"></div>
        </div>
        <div className="outline sm:mx-auto sm:w-[34.9rem]">
          <p className="text-center text-[3.6rem] font-bold leading-[4rem] tracking-[1.29px]  text-white sm:text-[5.6rem] sm:leading-[5.8rem] sm:tracking-[0.2rem] ">
            ZX9 SPEAKER
          </p>
          <p className="mt-[2.2rem] mb-[2.4rem] text-center text-[1.5rem] font-medium leading-[2.5rem] text-white sm:mt-[2.4rem] sm:mb-[4rem] ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="flex justify-center">
            <ButtonTwo url="/speakers/zx9-speaker" />
          </div>
        </div>
      </div>

      <div className="h-[32.99rem] bg-zx7-speaker-mobile bg-cover bg-right  py-[10.1rem] px-[2.1rem]  outline sm:h-[32rem] sm:bg-zx7-speaker-tablet sm:px-[6.2rem]">
        <p className="mb-[3.2rem] text-[2.80rem] font-bold leading-[3.8rem] tracking-[0.2rem]">
          ZX7 SPEAKER
        </p>
        <ButtonTwo url="/speakers/zx7-speaker" />
      </div>

      <div className="flex flex-col gap-[2.4rem] outline sm:h-[32rem] sm:flex-row sm:gap-[1.1rem]">
        <div className="h-[20rem] bg-yx1-earphones-mobile bg-contain sm:h-full sm:w-[50%]  sm:bg-yx1-earphones-tablet "></div>
        <div className="outline-800-red bg-[#f1f1f1] py-[4.1rem] px-[2.4rem] sm:flex sm:w-[50%] sm:flex-col sm:justify-center sm:px-0 sm:py-0 sm:pl-[4.1rem]">
          <p className="mb-[3.2rem] text-[3.2rem] font-bold leading-[3.82rem] tracking-[2px]">
            YX1 EARPHONES
          </p>
          <ButtonTwo url="/earphones/yx1-earphones" />
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
