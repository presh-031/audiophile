import React from "react";

// import { Manrope } from "@next/font/google";
import Header from "./Header";

import About from "./About";
import Footer from "./Footer";

// const manrope = Manrope({ subsets: ["latin"] });
const Layout = ({ children }) => {
  return (
    <div>
      {/* <div className={manrope.className}> */}
      <Header />
      {children}
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
