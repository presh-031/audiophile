import React from "react";

// import { Manrope } from "@next/font/google";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

// const manrope = Manrope({ subsets: ["latin"] });

// Logic for cart
import { Provider } from "react-redux";
import { store } from "../store/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div>
        {/* <div className={manrope.className}> */}
        <Header />
        {children}
        <About />
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
