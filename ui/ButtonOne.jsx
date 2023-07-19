import Link from "next/link";

const ButtonOne = ({ url }) => {
  return (
    <Link
      href={url}
      className=" bg-[#D87D4A] px-[3rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white transition-all duration-300 hover:bg-[#FBAF85]"
    >
      SEE PRODUCT
    </Link>
  );
};

export default ButtonOne;
