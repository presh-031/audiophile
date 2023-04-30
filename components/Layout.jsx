import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
// persistor
import { persistor } from "../store/store";
// Logic for cart
import { store } from "../store/store";

// Font optimization.
// import { Manrope } from "@next/font/google";
// const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const value = false;
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
