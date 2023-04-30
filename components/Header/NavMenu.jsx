import { useState } from "react";
import AllProducts from "../AllProducts";

const commonStyle = {
  position: "fixed",
  top: "7rem",
  "z-index": "9999",
  overflow: "scroll",
  bottom: 0,
  padding: "5px",
  border: "1px solid #0657FF",
  background: "#d9E5F0",
  width: "100%",
  transition: "0.5s",
  overflow: "hidden",
};

const visibleStyle = {
  ...commonStyle,
  left: "0",
};

const hiddenStyle = {
  ...commonStyle,
  left: "-100%",
};

const NavMenu = ({ style }) => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  return (
    <div
      style={navMenuIsOpen ? visibleStyle : hiddenStyle}
      className="border border-red-800"
    >
      <div
      // className="absolute top-0 right-0 left-0  bg-red-200"
      >
        <AllProducts />
      </div>
    </div>
  );
};

export default NavMenu;
