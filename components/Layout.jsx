import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
// persistor
import { persistor } from "../store/store";
// Logic for cart
import { store } from "../store/store";

// import { Manrope } from "@next/font/google";
// const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({ children }) => {
  // const value = false;
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<Loader />}
        persistor={persistor}
      >
        <div>
          <Toaster />
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
