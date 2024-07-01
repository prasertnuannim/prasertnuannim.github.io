import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width device-width, initial-scale=1" />
        <link rel="icon" href="/BaanDev.png" />
      </Head>
      <main className={`${montserrat.variable} font-sans w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
