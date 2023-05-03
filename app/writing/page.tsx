import Heading from "@/components/Heading";
import WritingListing from "@/components/WritingListing";
import { Search } from "@/components/searchbar/Search";
import { allWritings } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <header className="mb-28">
        {/* <header className="mb-28 border-b border-neutral-100"> */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <Link
                className="text-md inline-flex h-12 w-full items-center gap-2 rounded-full transition-all hover:translate-x-1  hover:text-primary-500"
                href="/"
              >
                <span className="inline-block rotate-180 pb-[2px] text-lg">
                  →
                </span>
                <span className="text-md inline-block">back home</span>
              </Link>
            </div>
            <div className="w-full max-w-[382px]">
              <Search />
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Writing" subtitle="Stories" />
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
        </div>
      </div>
    </section>
  );
}
