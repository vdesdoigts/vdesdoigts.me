import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import PostItem from "./PostItem";

const data = [
  {
    title: "Create a NBA schedule in Notion with their respective APIs",
    tag: {
      title: "code",
      color: "#9b5de5",
    },
  },
  {
    title: "React I Love You, But You're Bringing Me Down",
    tag: {
      title: "react",
      color: "#f15bb5",
    },
  },
  {
    title: "How to Get a Job at X",
    tag: {
      title: "interviews",
      color: "#00bbf9",
    },
  },
  {
    title: "Create a NBA schedule in Notion with their respective APIs",
    tag: {
      title: "code",
      color: "#9b5de5",
    },
  },
  {
    title: "React I Love You, But You're Bringing Me Down",
    tag: {
      title: "react",
      color: "#f15bb5",
    },
  },
  {
    title: "How to Get a Job at X",
    tag: {
      title: "interviews",
      color: "#00bbf9",
    },
  },
];

export default function PostsGrid({ posts }: any) {
  const [hovered, setHovered] = useState<number | null>(null);

  const onMouseOver = (index: number) => {
    setHovered(index);
  };

  const onMouseOut = () => {
    setHovered(null);
  };

  return (
    <Box as="section" w="100%" pt={6}>
      <Grid
        templateColumns="repeat(1, minmax(0, 1fr))"
        gap={8}
        rowGap={0}
        w="100%"
      >
        {posts.map((post: any, index: number) => (
          <GridItem
            key={post.slug}
            pb={8}
            opacity={
              hovered === index ? 1 : typeof hovered === "number" ? 0.4 : 1
            }
            transition="opacity 0.4s ease-in-out"
            onMouseEnter={() => onMouseOver(index)}
            onMouseLeave={onMouseOut}
          >
            <PostItem post={post} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
