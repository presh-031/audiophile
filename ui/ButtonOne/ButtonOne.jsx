import Link from "next/link";
import css from "./ButtonOne.module.css";

const ButtonOne = ({ url }) => {
  return (
    <Link
      href={url}
      className={`${css.button} inline-block w-fit bg-[#D87D4A] px-[3rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white`}
    >
      <span> SEE PRODUCT</span>
    </Link>
  );
};

export default ButtonOne;
