import { AspectRatio, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Content from "./Content";

export default function TheJourney() {
  return (
    <NextLink href="/vdesdoigts.me/nba-in-notion" passHref>
      <Box as="a" target="_blank" position="relative" width="100%" role="group">
        <Box position="relative" overflow="hidden">
          <AspectRatio maxW="100%" ratio={8 / 6}>
            {/* <Box> */}
            <video
              onMouseOver={(event: any) => event.target.play()}
              onMouseOut={(event: any) => event.target.pause()}
            >
              <source src="/posts/thejourney-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        </Box>
        <Content
          title="The Journey"
          description="A showcase about LeBron James journey."
          link="thejourney.com"
        />
      </Box>
    </NextLink>
  );
}
