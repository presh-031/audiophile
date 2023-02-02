import React from "react";

import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const Layout = ({ children }) => {
  return <div className={manrope.className}>{children}</div>;
};

export default Layout;
