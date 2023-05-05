const ProductFeatures = ({ product }) => {
  return (
    <div className="outline lg:flex lg:gap-[11.3%] ">
      <div className="lg:w-[57.2%] ">
        <p className="mb-[2.4rem] text-[2.4rem] font-medium leading-[3.6rem] tracking-[0.086rem] sm:mb-[3.2rem] sm:text-[3.2rem] sm:leading-[3.6rem] sm:tracking-[0.114rem]">
          FEATURES
        </p>
        <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
          {product.features}
        </p>
      </div>
      <div className="mt-[8.8rem] outline sm:mt-[12rem] sm:flex sm:w-[54.9rem] sm:justify-between lg:m-0 lg:w-[31.5%] lg:flex-col lg:justify-start">
        <p className="mb-[2.4rem] text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.88px] outline sm:mb-0 sm:text-[3.2rem] sm:tracking-[0.114rem] ">
          IN THE BOX
        </p>
        <ul className="outline lg:m-0">
          {product.includes.map((item) => {
            return (
              <li
                key={item.item}
                className=" mb-[0.80rem] text-[1.5rem] leading-[2.5rem] opacity-50"
              >
                <span className="mr-[2.4rem] font-bold text-[#d87d4a] ">
                  {item.quantity}x
                </span>
                <span className="font-medium">{item.item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
