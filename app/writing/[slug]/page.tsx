import { Mdx } from "components/Mdx";
import { allWritings } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { getTweets } from "lib/twitter";
import Balancer from "react-wrap-balancer";

export async function generateStaticParams() {
  return allWritings.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  console.log("params.slug: ", params.slug);
  const post = allWritings.find(
    (post) => post.slug.split("/").pop() === params.slug
  );

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://vdesdoigts.me${image}`
    : `https://vdesdoigts.me/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://vdesdoigts.me/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: any) {
  const post = allWritings.find(
    (post) => post.slug.split("/").pop() === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <section>
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <h1 className="max-w-[650px] font-serif text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {post.publishedAt}
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
