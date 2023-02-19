import React from "react";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

// Font optimization.
// import { Manrope } from "@next/font/google";
// const manrope = Manrope({ subsets: ["latin"] });

// Logic for cart
import { store } from "../store/store";
import { Provider } from "react-redux";

// persistor
import { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<Loader />}
        persistor={persistor}
      >
        <div>
          {/* <div className={manrope.className}> */}
          <Header />
          {children}
          <About />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
