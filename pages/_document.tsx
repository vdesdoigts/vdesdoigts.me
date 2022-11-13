import { Box } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&family=Roboto:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        as="body"
        sx={{
          "& > div": {
            minHeight: "100%",
          },
        }}
      >
        <Main />
        <NextScript />
      </Box>
    </Html>
  );
}
