import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

interface LatestWorksProps {
  children: JSX.Element;
}

export default function LatestWorks({ children }: LatestWorksProps) {
  return (
    <Box as="section" w="100%" pt={24} pb={24}>
      <Container maxW={{ base: "container.sm", lg: "container.xl" }}>
        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          gap={8}
          w="100%"
        >
          <GridItem colStart={{ base: 1, lg: 2 }} colSpan={{ base: 1, lg: 2 }}>
            <Box>
              <Box as="h2" color="gray.200" fontSize="3xl">
                Featured
              </Box>
              <Heading
                pb={6}
                color="black"
                fontSize="7xl"
                textTransform="uppercase"
              >
                Work
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        {children}
      </Container>
    </Box>
  );
}
