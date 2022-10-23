import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Content from "./Content";

export default function NotionNba() {
  return (
    <NextLink href="/vdesdoigts.me/nba-in-notion" passHref>
      <Box as="a" target="_blank" position="relative" width="100%" role="group">
        <Box position="relative" overflow="hidden">
          <Image
            src="/posts/notionnba-bg.png"
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
              src="/posts/notionnba-icon.png"
              alt="me"
              layout="responsive"
              width={1226}
              height={1226}
            />
          </Box>
        </Box>
        <Content
          title="NBA in Notion"
          description="Season games, teams and players in Notion."
          link="instagram.com/finegusan"
        />
      </Box>
    </NextLink>
  );
}
