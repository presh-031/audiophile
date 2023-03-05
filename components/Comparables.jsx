import Image from "next/image";
import ButtonOne from "./ButtonOne";

const Comparables = ({ comparables }) => {
  // console.log(comparables);
  return (
    <div className="outline">
      <p className="mb-[4rem] text-center text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.086rem] outline">
        YOU MAY ALSO LIKE
      </p>
      {comparables.map((comparable) => (
        <div key={comparable.slug}>
          <div className="mt-[4rem] mb-[3.2rem]  h-[12rem] outline  ">
            <Image
              src={comparable.image.mobile.slice(1)}
              alt="product-image"
              width={71.56}
              height={86}
            />
          </div>
          <p className="mb-[3.2rem] text-center text-[2.4rem] font-bold leading-[3.278rem] tracking-[.171rem]">
            {comparable.name}
          </p>
          <ButtonOne url={`/${comparable.category}/${comparable.slug}`} />
        </div>
      ))}
    </div>
  );
};

export default Comparables;
