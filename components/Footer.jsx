import Image from "next/image";
import React from "react";

import logo from "../assets/shared/desktop/logo.svg";
import MenuItems from "./Hero/Header/MenuItems";

import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-black px-[2.4rem] pt-[5.2rem] text-center text-white">
      <div className="text-[1.5rem] font-medium leading-[2.5rem]">
        <Image src={logo} alt="logo" />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div>
        <MenuItems />
        <div>
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
