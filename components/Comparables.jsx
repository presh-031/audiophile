const Comparables = ({ comparables }) => {
  console.log(comparables);
  return (
    <div className="outline">
      <p className="mb-[4rem] text-center text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.086rem] outline">
        YOU MAY ALSO LIKE
      </p>
      {comparables.map((comparable) => (
        <div>
          <div className="mt-[4rem] mb-[3.2rem]  h-[12rem] outline  ">
            {/* <Image /> */}
          </div>
          <p className="mb-[3.2rem] text-center text-[2.4rem] font-bold leading-[3.278rem] tracking-[.171rem]">
            {comparable.name}
          </p>
          {/* <ButtonOne url={`//${comparable.slug}`} /> */}
        </div>
      ))}
    </div>
  );
};

export default Comparables;
