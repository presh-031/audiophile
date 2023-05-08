// persistor
import { persistor, store } from "../store/store";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
// Logic for cart
import { useRouter } from "next/router";

// import { Manrope } from "@next/font/google";
// const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const router = useRouter();
  const isCheckoutPage = router.pathname === "/checkout";

  // const value = false;
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<Loader />}
        persistor={persistor}
      >
        <div className="bg-[#f2f2f2]">
          <Toaster />
          {/* <div className={manrope.className}> */}
          <Header />
          {children}
          {!isCheckoutPage && <About />}
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
