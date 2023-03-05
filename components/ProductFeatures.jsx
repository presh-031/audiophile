const ProductFeatures = ({ product }) => {
  return (
    <div>
      <div>
        <p className="mb-[2.4rem] text-[2.4rem] font-medium leading-[3.6rem] tracking-[0.86px]">
          FEATURES
        </p>
        <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
          {product.features}
        </p>
      </div>
      <div className="mt-[8.8rem]">
        <p className="mb-[2.4rem] text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.88px]">
          IN THE BOX
        </p>
        <ul>
          {product.includes.map((item) => {
            return (
              <li
                key={item.item}
                className=" mb-[0.80rem] text-[1.5rem] leading-[2.5rem] opacity-50"
              >
                <span className="mr-[2.4rem] font-bold text-[#d87d4a] ">
                  {item.quantity}x
                </span>
                <span>{item.item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;
