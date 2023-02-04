import Image from "next/image";
import React from "react";

import logo from "../assets/shared/desktop/logo.svg";
import MenuItems from "./Header/MenuItems";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="mt-[12rem] bg-black px-[2.4rem] pb-[4rem]  text-center text-white">
      <div className="mx-auto mb-[5.2rem] h-[4px] w-[10.1rem] bg-[#d87d4a]"></div>
      <div className="text-[1.5rem] font-medium leading-[2.5rem]">
        <Image className="mx-auto mb-[4.8rem]" src={logo} alt="logo" />
        <MenuItems />
      </div>
      <div>
        <div className="mt-[4.8rem] text-[1.5rem] font-medium leading-[2.5rem] ">
          <p className="">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
          </p>
          <p className="mt-[4.8rem]">Copyright 2021. All Rights Reserved</p>
        </div>{" "}
        <div className="mt-[4.8rem] flex items-center justify-center gap-[1.6rem]">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
