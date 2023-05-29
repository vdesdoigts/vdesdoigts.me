import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import WritingListing from "@/components/WritingListing";
import { Search } from "@/components/searchbar/Search";
import { allWritings } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Read my thoughts on stuff I like.",
};

export default async function WritingPage() {
  return (
    <main>
      <header className="mb-10">
        <div className="container mx-auto px-4 py-4">
          <div className="grid w-full grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-2 lg:col-start-2">
              <div className="flex gap-2">
                <div>
                  <BackButton href="/" />
                </div>
                <div className="w-full max-w-[382px]">
                  <Search />
                </div>
              </div>
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
      <Footer />
    </main>
  );
}
