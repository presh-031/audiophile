import React from "react";

import { Manrope } from "@next/font/google";
import Footer from "./Footer";
import Header from "./Hero/Header";

const manrope = Manrope({ subsets: ["latin"] });
const Layout = ({ children }) => {
  return (
    <div className={manrope.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
