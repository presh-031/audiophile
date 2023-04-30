import "@/styles/globals.css";

import Layout from "@/components/Layout";
import Context from "../context/menuContext";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
