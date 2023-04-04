import Image from "next/image";

const ProductGallery = ({ gallery }) => {
  //   console.log(gallery);
  return (
    <div className="mt-[8.8rem] mb-[12rem] outline sm:mt-[15.3rem] sm:flex sm:gap-[1.8rem]">
      <div className="sm:flex sm:flex-1 sm:flex-col sm:gap-[2rem]">
        <Image
          src={gallery.first.mobile.slice(1)}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl sm:mb-0 sm:w-full"
        />

        <Image
          src={gallery.second.mobile.slice(1)}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl sm:mb-0 sm:w-full"
        />
      </div>

      <Image
        src={gallery.third.mobile.slice(1)}
        alt="product-image"
        width={327}
        height={368}
        className=" rounded-xl sm:flex-1"
      />
    </div>
  );
};

export default ProductGallery;
