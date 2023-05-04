const About = () => {
  return (
    <div className="mt-[12rem] px-[2.4rem]  sm:mt-[9.6rem] sm:px-[4rem] lg:mt-[20rem] lg:flex lg:flex-row-reverse lg:items-center lg:gap-[9.5rem] xl:px-[16.5rem]">
      <div className="h-[30.0rem] rounded-[8px]  bg-best-gear-mobile bg-contain sm:bg-best-gear-tablet lg:h-[58.8rem] lg:w-[50%] lg:bg-best-gear-desktop lg:bg-cover lg:bg-right "></div>
      <div className="mt-[4.00rem] text-center  sm:mt-[6.3rem]  lg:m-0 lg:w-[50%] lg:p-0 lg:text-left">
        <p className=" mb-[3.2rem] text-[2.80rem] font-bold uppercase leading-[3.82rem] tracking-[0.1rem] sm:mx-auto sm:w-[80%] sm:text-[4rem] sm:leading-[4.4rem] sm:tracking-[0.143rem] lg:w-[100%]">
          Bringing you the best audio gear
        </p>
        <p className="text-[1.5rem]  font-medium leading-[2.5rem] opacity-50 sm:mx-auto sm:w-[84%] lg:w-[100%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default About;
