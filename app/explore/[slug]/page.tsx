import { Mdx } from "@/components//Mdx";
import { allExplores } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
// import { getTweets } from "lib/twitter";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import { DateTime } from "luxon";

export async function generateStaticParams() {
  return allExplores.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allExplores.find(
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
      url: `https://vdesdoigts.me/${slug}`,
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

export default async function ExplorePage({ params }: any) {
  const post = allExplores.find(
    (post) => post.slug.split("/").pop() === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="py-3">
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <header className="container mx-auto mb-10 max-w-[780px] px-4">
        <div>
          <BackButton href="/explore" />
        </div>
      </header>
      <article
        className="prose prose-slate max-w-none lg:prose-xl
        prose-h2:mb-3 prose-h2:mt-16 prose-h2:font-serif prose-h2:text-2xl
      prose-h2:font-light
      prose-p:font-light
      prose-a:font-light prose-a:text-primary-500 prose-a:no-underline
      prose-li:font-light lg:prose-h3:text-3xl
      lg:prose-strong:font-normal"
      >
        <header className="not-prose container mx-auto max-w-[780px] px-4 pb-6">
          <div className="pb-2 text-xl font-light text-gray">
            {DateTime.fromISO(post.publishedAt).setLocale("en").toFormat("DD")}
          </div>
          <h1 className="max-w-[650px] font-serif text-5xl font-bold uppercase leading-none text-black">
            {post.title}
          </h1>
        </header>
        <Mdx code={post.body.code} />
      </article>
      <Footer />
    </main>
  );
}
