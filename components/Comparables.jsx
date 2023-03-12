import Image from "next/image";
import ButtonOne from "./ButtonOne";

const Comparables = ({ comparables }) => {
  console.log(comparables);
  console.log(comparables[0].image.mobile.slice(1));
  return (
    <div className="mb-[17.2rem] ">
      <p className="mb-[4rem] text-center text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.086rem] ">
        YOU MAY ALSO LIKE
      </p>
      {comparables.map((comparable) => {
        const image = comparable.image.mobile;
        return (
          <div
            key={comparable.slug}
            className="mb-[5.6rem] flex flex-col items-center "
          >
            <Image
              src={image.slice(1)}
              alt="product"
              width={372}
              height={120}
              className="mb-[3.2rem]"
            />

            <p className="mb-[3.2rem] text-center text-[2.4rem] font-bold leading-[3.278rem] tracking-[.171rem]">
              {comparable.name}
            </p>
            <ButtonOne url={`/${comparable.category}/${comparable.slug}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Comparables;
