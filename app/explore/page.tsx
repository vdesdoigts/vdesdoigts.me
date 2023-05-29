import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import ShowItem from "@/components/ShowItem";
import Genshin from "@/components/previews/Genshin";
import Journey from "@/components/previews/Journey";
import NotionNBA from "@/components/previews/NotionNBA";
import Sorarium from "@/components/previews/Sorarium";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Where I’m exploring ideas, make unfinished side projects and funny stuff.",
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
              <p className="max-w-[700px] pt-6 text-2xl font-light">
                Where I’m exploring ideas, make unfinished side projects and{" "}
                <span className="line-through">funny</span> stuff.
              </p>
            }
          />
        </div>
        <div className="pt-8">
          <div className="grid w-full grid-cols-3 gap-x-8 gap-y-14 pt-8">
            <div className="col-span-1">
              <Link
                href="https://www.notion.so/vdesdoigts/The-Great-NBA-Dashboard-2b9d968e8b37494ba0ff943e8f42aa8d?pvs=4"
                target="_blank"
              >
                <ShowItem
                  desc="Season games, teams and players in Notion"
                  title="NBA in Notion"
                  url="vdesdoigts.me/notion-nba"
                >
                  <NotionNBA />
                </ShowItem>
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/explore/sorarium">
                <ShowItem
                  desc="Collectible showcase for NBA Sorare"
                  title="Sorarium"
                  url="vdesdoigts.me/sorarium"
                >
                  <Sorarium />
                </ShowItem>
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/explore/genshin">
                <ShowItem
                  desc="Find out exactly what you need and where to get it"
                  title="Companion for Genshin Impact"
                  url="vdesdoigts.me/genshin"
                >
                  <Genshin />
                </ShowItem>
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/explore/the-journey">
                <ShowItem
                  desc="Animated showcase of LeBron James' career"
                  title="The Journey"
                  url="vdesdoigts.me/the-journey"
                >
                  <Journey />
                </ShowItem>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
