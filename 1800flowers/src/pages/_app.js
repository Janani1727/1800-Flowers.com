import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
