import Image from "next/image";
import ButtonOne from "./ButtonOne";

const ProductItem = ({ item }) => {
  console.log(item);
  const image = item?.image.mobile;

  return (
    <div className="">
      <Image
        // .slice(1) to remove the initial '.' in the filepath string the json returns
        // so that the filepath referenced starts with a '/', as the assets are in the public folder.
        src={image.slice(1)}
        alt="product"
        height={352}
        width={327}
        className="mb-[3.2rem]"
      />
      <div className="flex flex-col items-center gap-[2.4rem] text-center">
        {item.new && (
          <p className=" text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[10px] text-[#d87d4a]">
            new product
          </p>
        )}
        <p className=" text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[1px]">
          {item.name}
        </p>
        <p className="  text-[1.5rem] font-medium leading-[2.5rem]">
          {item.description}
        </p>
        <ButtonOne url={`/${item.category}/${item.slug}`} />
      </div>
    </div>
  );
};

export default ProductItem;
