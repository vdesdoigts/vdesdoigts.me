import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface PostItemProps {
  post: {
    tag: {
      color: string;
      title: string;
    };
    title: string;
  };
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <Link passHref href="/">
      <Box as="a">
        <Grid
          as="article"
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          }}
          gap={8}
          w="100%"
        >
          <GridItem textAlign="right">
            <Text position="relative" pt={1.5} color="gray.200" fontSize="xl">
              Oct 30, 2022
            </Text>
            {/* <Tag title={post.tag.title} bgColor="#000" color="#fff" /> */}
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Heading as="h2" color="black" fontSize="4xl" fontWeight="400">
              {post.title}
            </Heading>
          </GridItem>
        </Grid>
      </Box>
    </Link>
  );
}
