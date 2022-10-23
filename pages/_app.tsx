import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import Footer from "../components/Footer";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
