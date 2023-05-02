import { Writing as IWriting } from "contentlayer/generated";
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
          <article className="grid w-full grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            <div className="col-span-1 pt-2 text-right">
              <time
                className="text-xl font-light text-gray"
                dateTime="2023-03-30"
              >
                Mar 22, 2023
              </time>
            </div>
            <div className="col-span-1 lg:col-span-2 lg:col-start-2">
              <h2 className="max-w-[800px] font-serif text-4xl">
                Create a NBA schedule with Notion and their respective APIs
              </h2>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
