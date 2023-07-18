import Image from "next/image";
import React, { useState } from "react";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import AllProducts from "../AllProducts";

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
  };

  return (
    <>
      <Image
        className=" lg:hidden"
        src={hamburgerMenu}
        alt="menu"
        onClick={handleMenu}
      />

      {menuIsOpen && (
        <div
          onClick={handleMenu}
          className="absolute left-0 bottom-0  top-[7rem]  z-[1000]  w-full  bg-black bg-opacity-40"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className=" h-fit w-full rounded-b-[8px] bg-white py-[3.5rem]  "
          >
            <AllProducts handleMenu={handleMenu} />
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
