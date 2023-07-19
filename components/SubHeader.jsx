import ButtonOne from "../ui/ButtonOne";

const SubHeader = () => {
  return (
    <div className="mb-[8.4rem] h-[51rem] bg-black bg-subheader-mobile bg-cover bg-center bg-no-repeat pt-[10.8rem] text-white sm:mb-[9.5rem]  sm:h-fit  sm:bg-subheader-tablet sm:bg-bottom sm:pt-[12.6rem] sm:pb-[16.7rem] xl:mb-[12rem] xl:h-[63.2rem] xl:bg-subheader-desktop  xl:px-[16.5rem]  xl:pt-[12.8rem] xl:pb-[15.80rem] ">
      <div className="px-8 text-center sm:mx-auto sm:w-[40rem] sm:px-0  xl:mx-0 xl:text-left ">
        <p className="text-[1.4rem] font-normal  leading-[1.91rem] tracking-[10px] text-[#fafafa] opacity-50 ">
          NEW PRODUCT
        </p>
        <p className="mb-[2.4rem] mt-[1.6rem]  text-[3.6rem] font-bold leading-[4rem] tracking-[.129rem] sm:mt-[2.4rem] sm:text-[5.6rem] sm:leading-[5.8rem] sm:tracking-[.2rem]">
          XX99 MARK II HEADPHONES
        </p>
        <p className=" mb-[2.8rem] text-[1.5rem] font-medium leading-[2.5rem]  sm:m-auto sm:mb-[4rem] sm:w-[90%] lg:w-full ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOne url={"/headphones/xx99-mark-two-headphones"} />
      </div>
    </div>
  );
};

export default SubHeader;
