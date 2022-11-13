import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface HelloProps {
  children: JSX.Element;
}

export default function Hello({ children }: HelloProps) {
  return (
    <Box flex={1} flexBasis="100vh" maxH="1000px" bg="#F8F6F5">
      <Container maxW={{ base: "container.sm", lg: "container.xl" }} h="100%">
        <VStack pb={24} h="100%" justifyContent="space-between">
          <Box w="100%">{children}</Box>
          <Grid
            templateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            }}
            gap={8}
            w="100%"
          >
            <GridItem
              colStart={{ base: 1, lg: 2 }}
              colSpan={{ base: 1, lg: 2 }}
            >
              <Box as="section" pt={24}>
                <Heading
                  pb={6}
                  color="black"
                  fontSize="7xl"
                  textTransform="uppercase"
                >
                  Hello There
                </Heading>
                <Box maxW="720px" color="gray.900" fontSize="3xl">
                  <Box as="p" pb={4}>
                    I’m Vincent, a multidisciplinary developer and creative.
                    With strong skills in development and user experience, I
                    love creating user-friendly interfaces.
                  </Box>
                  <Box as="p">
                    I’m the co-founder of{" "}
                    <NextLink href="https://premieroctet.com" passHref>
                      <Link as="a">Premier Octet</Link>
                    </NextLink>
                    , an agency that develops website / apps for companies like
                    Orpi.
                    {/* <Typing>
                      <span>Orpi.</span>
                      <Typing.Backspace count={5} />
                      <span>20 Minutes.</span>
                    </Typing> */}
                    {/* <Typist
                      cursorBlinkSpeed={2000}
                      defaultText="Orpi."
                      sentences={["Orpi.", "20 Minutes.", "SNCF."]}
                      pauseTime={200}
                    /> */}
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
