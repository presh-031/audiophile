import Image from "next/image";

const ProductGallery = ({ gallery }) => {
  //   console.log(gallery);
  return (
    <div className="mt-[8.8rem] mb-[12rem]">
      <div>
        <Image
          src={gallery.first.mobile.slice(1)}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl"
        />

        <Image
          src={gallery.second.mobile.slice(1)}
          alt="product-image"
          width={327}
          height={174}
          className="mb-[2rem] rounded-xl"
        />
      </div>

      <Image
        src={gallery.third.mobile.slice(1)}
        alt="product-image"
        width={327}
        height={368}
        className=" rounded-xl"
      />
    </div>
  );
};

export default ProductGallery;
