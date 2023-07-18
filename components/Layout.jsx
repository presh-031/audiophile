// persistor
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

// import { Manrope } from "@next/font/google";
// const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const router = useRouter();
  const isCheckoutPage = router.pathname === "/checkout";

  return (
    <Provider store={store}>
      <PersistGate
        // loading={<Loader />}
        persistor={persistor}
      >
        <div className="relative mx-auto max-w-[1500px]">
          <Toaster />
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
