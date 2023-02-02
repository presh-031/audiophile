import Image from "next/image";
import React from "react";

import audiophile from "../../assets/audiophile.svg";

const Header = () => {
  return (
    <header>
      <Image src={audiophile} alt="logo" />
      <ul>
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
    </header>
  );
};

export default Header;
