import Hello from "@/components/Hello";
import LatestPosts from "@/components/LatestPosts";
import LatestWorks from "@/components/LatestWorks";
import Menu from "@/components/Menu";
import PostsGrid from "@/components/PostsGrid";
import WorksGrid from "@/components/WorksGrid";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
// import { posts } from "../getAllPosts";
import { promises as fs } from "fs";
import * as matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Vincent Desdoigts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" display="flex" flexDirection="column">
        <Hello>
          <Menu />
        </Hello>
        <LatestWorks>
          <WorksGrid />
        </LatestWorks>
        <LatestPosts>
          <PostsGrid posts={posts} />
        </LatestPosts>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: any[] }> = async () => {
  const postsDirectory = path.join(process.cwd(), "pages/writing");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename, "index.mdx");
    const fileContents = await fs.readFile(filePath, "utf8");
    // @ts-ignore
    const { data, content } = matter(fileContents);

    return {
      slug: filename,
      meta: data,
      content,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
};
export default Home;
