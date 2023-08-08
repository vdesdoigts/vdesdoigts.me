import BackButton from "@/components/BackButton";
import ExploreListing from "@/components/ExploreListing";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Where I’m exploring ideas, making unfinished side projects and funny stuff.",
};

export default async function ExplorePage() {
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading
            title="Explore"
            subtitle="At your own risk"
            desc={
              <p className="max-w-[640px] pt-6 text-2xl font-light">
                Where I’m exploring ideas, making unfinished side projects and{" "}
                <span className="line-through">funny</span> stuff.
              </p>
            }
          />
        </div>
        <div className="pt-8">
          <ExploreListing />
        </div>
      </div>
      <Footer />
    </main>
  );
}
