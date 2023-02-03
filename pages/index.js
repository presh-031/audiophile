import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import HomePageProducts from "@/components/HomePageProducts";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AllProducts />
        <HomePageProducts />
      </main>
    </>
  );
}
