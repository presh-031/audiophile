import ButtonOne from "./ButtonOne";

const SubHeader = () => {
  return (
    <div className="mb-[8.4rem] h-[51rem] bg-black bg-subheader-mobile bg-cover bg-center bg-no-repeat  pt-[10.8rem] text-center text-white ">
      <div className=" px-8">
        <p className="text-[1.4rem] font-normal leading-[1.91rem] tracking-[10px] text-[#fafafa]">
          NEW PRODUCT
        </p>
        <p className="mb-[2.4rem] mt-[1.6rem] text-[3.6rem] font-bold leading-[4rem] tracking-[1.29px]">
          XX99 MARK II HEADPHONES
        </p>
        <p className="mb-[2.8rem] text-[1.5rem]  font-medium leading-[2.5rem] ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOne url={"/headphones/xx99-mark-two-headphones"} />
      </div>
    </div>
  );
};

export default SubHeader;
