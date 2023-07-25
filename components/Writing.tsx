import Heading from "@/components/Heading";
import WritingListing from "@/components/WritingListing";
import { Writing as IWriting } from "contentlayer/generated";
import Link from "next/link";

export default function Writing({ allWritings }: { allWritings: IWriting[] }) {
  return (
    <div className="pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Writing" subtitle="Latest posts" />
        </div>
        <div className="pt-8">
          <WritingListing
            allWritings={allWritings.sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })}
          />
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 pt-4 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-2 lg:col-start-2">
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 py-2 text-primary-500 transition-all hover:translate-x-1"
              >
                <span className="inline-block text-lg">→</span>{" "}
                <span className="inline-block text-xl font-light">
                  all stories
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
