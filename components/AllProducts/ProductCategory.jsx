import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const ProductCategory = ({ categoryImg, categoryTitle }) => {
  return (
    <div className=" mt-[6.8rem] flex flex-col items-center rounded-[.8rem] bg-[#f1f1f1] text-center  sm:mt-[5rem] sm:w-full">
      <Image
        className="relative top-[-5.2rem] mb-[-5.2rem] lg:h-[16rem] lg:w-[12.295rem] lg:object-cover"
        src={categoryImg}
        alt="category"
        height={133}
        width={147}
      />
      <p className="text-[1.5rem] font-bold leading-[2rem] tracking-[0.107rem]">
        {categoryTitle}
      </p>
      <Link
        href={`/${categoryTitle.toLowerCase()}`}
        className="mt-[1.7rem] mb-[2.2rem] flex justify-center gap-[1.3rem] lg:mt-[1.5rem] lg:mb-[3rem] "
      >
        <p className="text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] opacity-50">
          SHOP
        </p>
        <Image src={arrowRight} alt="shop" />
      </Link>
    </div>
  );
};

export default ProductCategory;
