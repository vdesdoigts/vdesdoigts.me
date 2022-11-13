import MDXProvider from "@/components/MdxProvider";
import { Box, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

const config = {
  url: "https://nextjs-mdx-blog-starter.vercel.app/",
  title: "Next.js MDX Blog Starter",
  subtitle: "Content authoring with MDX. Powered by Next.js.", // longDescription : appears in landing page meta description
  description:
    "Next.js MDX Blog Starter for building blogs with Next.js and MDX, including Theme UI Component Design System, Vercel Deployment and more.",
  author: "John Polacek",
  analytics: "", // put your google analytics code here to add tracking
  shareImage: "https://nextjs-mdx-blog-starter.vercel.app/img/screenshot.png",
  shareImageAlt: "Next.js MDX Blog Starter Screenshot",
  postsPerPage: 8,
  showDate: true, // if you would like the date to appear on the blog posts
  disqus: "", // your disqus shortname, remove if you don't use disqus
};

type WrtingPost = any;

export default function WrtingPost({ children, meta }: WrtingPost) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Box as="main">
        <Container maxW={{ base: "container.sm", lg: "container.xl" }}>
          {/* <Menu /> */}
          <Box as="article" pt="100px" pb="60px">
            <Heading
              as="h1"
              maxWidth="60rem"
              pb={6}
              color="black"
              fontSize="7xl"
              textTransform="uppercase"
            >
              {meta.title}
            </Heading>
            <Box
              maxWidth="42.5rem"
              mx="auto"
              fontSize="1.125rem"
              sx={{
                "p + p": {
                  pt: 4,
                },
              }}
            >
              <MDXProvider>{children}</MDXProvider>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
