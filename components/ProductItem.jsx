import Image from "next/image";
import ButtonOne from "./ButtonOne";

const ProductItem = ({ item }) => {
  console.log(item);
  const image = item?.image.mobile;

  return (
    <div className="">
      <div>
        <Image
          // .slice(1) to remove the initial '.' the json returns
          src={image.slice(1)}
          alt="product-image"
          height={352}
          width={327}
        />
      </div>
      <div className="text-center">
        {item.new && (
          <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[10px] text-[#d87d4a]">
            new product
          </p>
        )}
        <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[1px]">
          {item.name}
        </p>
        <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem]">
          {item.description}
        </p>
        <ButtonOne url={`/${item.category}/${item.slug}`} />
      </div>
    </div>
  );
};

export default ProductItem;
