import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Content from "./Content";

export default function Rainbow() {
  return (
    <NextLink href="https://instagram.com/finegusan" passHref>
      <Box as="a" target="_blank" position="relative" width="100%" role="group">
        <Box position="relative" overflow="hidden">
          <Image
            src="/posts/rainbow-bg.png"
            alt="me"
            layout="responsive"
            width={1226}
            height={922}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            sx={{
              transform: "translateY(0)",
              transition: "transform 1s ease-in-out",
            }}
            _groupHover={{
              transform: "translateY(-25%)",
            }}
          >
            <Image
              src="/posts/rainbow-icon.png"
              alt="me"
              layout="responsive"
              width={1226}
              height={1226}
            />
          </Box>
        </Box>
        <Content
          title="Rainbow"
          description="A color palette for instagram feed."
          link="instagram.com/finegusan"
        />
      </Box>
    </NextLink>
  );
}
