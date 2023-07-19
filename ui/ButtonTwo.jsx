import Link from "next/link";

const ButtonTwo = (url) => {
  return (
    <Link
      href={url}
      className="inline-block px-[3.15rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] outline outline-[1px] outline-black sm:w-fit"
    >
      SEE PRODUCT
    </Link>
  );
};

export default ButtonTwo;
