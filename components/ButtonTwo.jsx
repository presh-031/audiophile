import Link from "next/link";
import React from "react";

const ButtonTwo = ({ url }) => {
  return (
    <Link
      href={url}
      className="px-[3rem] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.01em] outline outline-[1px] outline-black"
    >
      SEE PRODUCT
    </Link>
  );
};

export default ButtonTwo;
