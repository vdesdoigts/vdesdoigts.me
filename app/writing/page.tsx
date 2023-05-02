import Heading from "@/components/Heading";
import { Search } from "@/components/searchbar/Search";
import WritingListing from "@/components/WritingListing";
import { allWritings } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex justify-end pt-4">
          <div className="w-full max-w-[382px]">
            <Search />
          </div>
        </div>
      </div>
      <div className="pt-28">
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
      </div>
    </section>
  );
}
