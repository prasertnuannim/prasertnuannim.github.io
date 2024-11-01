import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
        <link rel="icon" href="/images/profile/sertImage.png" />
      </Head>
      <main className={`${montserrat.variable} font-sans w-full min-h-screen`}>
        <Provider store={store}>
          <NavBar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </Provider>
      </main>
    </>
  );
}
