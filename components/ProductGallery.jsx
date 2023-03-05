import Image from "next/image";

const ProductGallery = ({ gallery }) => {
  console.log(gallery);
  return (
    <div>
      <div>
        <div>
          <Image
            src={gallery.first.mobile.slice(1)}
            alt="product-gallery"
            width={327}
            height={174}
          />
        </div>
        <div>
          <Image
            src={gallery.second.mobile.slice(1)}
            alt="product-gallery"
            width={327}
            height={174}
          />
        </div>
      </div>
      <div>
        <Image
          src={gallery.third.mobile.slice(1)}
          alt="product-gallery"
          width={327}
          height={368}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
