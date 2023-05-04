import { Mdx } from "@/components//Mdx";
import { allWritings } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { getTweets } from "lib/twitter";
import BackButton from "@/components/BackButton";
import { DateTime } from "luxon";
import Balancer from "react-wrap-balancer";

export async function generateStaticParams() {
  return allWritings.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
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
    <section className="container mx-auto px-4 py-3">
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <header className="mx-auto mb-28 max-w-[800px]">
        <div>
          <BackButton />
        </div>
      </header>
      <article className="prose prose-slate mx-auto max-w-[800px] lg:prose-2xl prose-p:font-light">
        <header className="not-prose pb-6">
          <div className="pb-2 text-xl font-light text-gray">
            {DateTime.fromISO(post.publishedAt).setLocale("en").toFormat("DD")}
          </div>
          <h1 className="max-w-[650px] font-serif text-5xl font-bold uppercase leading-none text-black">
            <Balancer>{post.title}</Balancer>
          </h1>
        </header>
        <Mdx code={post.body.code} />
      </article>
    </section>
  );
}
