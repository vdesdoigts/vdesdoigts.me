import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Content from "./Content";

export default function PremierOctet() {
  return (
    <NextLink href="/" passHref>
      <Box as="a" position="relative" width="100%" role="group">
        <Box position="relative">
          <Image
            src="/posts/playgrounds-bg.png"
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
              transform: "scale(1)",
              transition: "transform 0.8s ease-in-out",
            }}
            _groupHover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              src="/posts/playgrounds-icon.png"
              alt="me"
              layout="responsive"
              width={1226}
              height={922}
            />
          </Box>
        </Box>
        <Content
          title="Playgrounds"
          description="Find the best streetball court around you."
          link="vdesdoigts.me/playgrounds"
        />
      </Box>
    </NextLink>
  );
}
