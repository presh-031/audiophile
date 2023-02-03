import Image from "next/image";
import React from "react";

import logo from "../assets/shared/desktop/logo.svg";
import MenuItems from "./Hero/Header/MenuItems";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div>
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
      </div>
    </footer>
  );
};

export default Footer;
