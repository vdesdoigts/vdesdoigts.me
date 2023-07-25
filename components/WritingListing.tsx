import { Writing as IWriting } from "contentlayer/generated";
import { DateTime } from "luxon";
import Link from "next/link";

export default function WritingListing({
  allWritings,
}: {
  allWritings: IWriting[];
}) {
  return (
    <div className="grid w-full gap-y-6">
      {allWritings.map((post) => (
        <Link
          key={post.slug}
          className="mb-4 flex flex-col space-y-1"
          href={`${post.slug}`}
        >
          <article className="grid w-full grid-cols-1 gap-x-8 gap-y-1 lg:grid-cols-3 lg:gap-y-8">
            <div className="col-span-1 pt-2 lg:text-right">
              <time
                className="text-xl font-light text-gray"
                dateTime="2023-03-30"
              >
                {DateTime.fromISO(post.publishedAt)
                  .setLocale("en")
                  .toFormat("DD")}
              </time>
            </div>
            <div className="col-span-1 lg:col-span-2 lg:col-start-2">
              <h2 className="max-w-[800px] origin-left font-serif text-2xl font-normal transition-transform hover:scale-105 lg:text-3xl xl:text-4xl">
                {post.title}
              </h2>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
