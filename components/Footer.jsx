import Image from "next/image";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import logo from "../assets/shared/desktop/logo.svg";
import MenuItems from "./Header/MenuItems";

const Footer = () => {
  return (
    <footer className="mt-[12rem] bg-black px-[2.4rem] pb-[4rem] text-center text-white sm:mt-[9.6rem] sm:px-[4rem] sm:pb-[4.6rem] sm:text-left lg:mt-[20rem]  xl:px-[16.5rem] ">
      <div className="mx-auto mb-[5.2rem] h-[4px] w-[10.1rem] bg-[#d87d4a] sm:mb-[5.6rem]"></div>
      <div className="text-[1.5rem] font-medium  leading-[2.5rem]  lg:mb-[3.6rem] lg:flex lg:justify-between">
        <Image
          className="mx-auto mb-[4.8rem]  sm:mx-0 sm:mb-[3.2rem] lg:m-0"
          src={logo}
          alt="logo"
        />
        <MenuItems />
      </div>
      <div className="mt-[4.8rem] text-[1.5rem] font-medium  leading-[2.5rem]  sm:mt-[3.2rem]">
        <div className="  lg:flex lg:items-end lg:justify-between">
          <p className="opacity-50 lg:w-[49%]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&#39;re a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we&#39;re open 7 days a week.
          </p>
          <div className=" hidden  sm:mt-0 lg:flex lg:items-center lg:justify-center lg:gap-[1.6rem]">
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
          </div>
        </div>{" "}
        <div className="mt-[4.8rem]   sm:mt-[8.0rem] sm:flex sm:justify-between lg:mt-[5.6rem] ">
          <p className=" opacity-50 ">Copyright 2021. All Rights Reserved</p>
          <div className=" flex items-center justify-center  gap-[1.6rem] sm:mt-0 lg:hidden">
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
