import { Box, Grid, GridItem } from "@chakra-ui/react";
import NotionNba from "./Works/NotionNba";
import Playgrounds from "./Works/Playgrounds";
import PremierOctet from "./Works/PremierOctet";
import Rainbow from "./Works/Rainbow";
import TheJourney from "./Works/TheJourney";

export default function PostsGrid() {
  return (
    <Box as="section" w="100%" pt={6}>
      <Grid
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gap={8}
        rowGap={16}
        w="100%"
      >
        <GridItem>
          <Rainbow />
        </GridItem>
        <GridItem>
          <Playgrounds />
        </GridItem>
        <GridItem>
          <NotionNba />
        </GridItem>
        <GridItem>
          <PremierOctet />
        </GridItem>
        <GridItem>
          <TheJourney />
        </GridItem>
      </Grid>
    </Box>
  );
}
