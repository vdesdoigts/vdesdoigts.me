import Heading from "@/components/Heading";
import QuickAccess from "@/components/QuickAccess";
import ShowItem from "@/components/ShowItem";
import NotionNBA from "@/components/previews/NotionNBA";
import Sorarium from "@/components/previews/Sorarium";
import Link from "next/link";

export default function Explore() {
  return (
    <div className="pt-44">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Explore" subtitle="At your own risk" />
        </div>
        <div className="grid w-full grid-cols-3 gap-x-8 gap-y-12 pt-8">
          <div className="col-span-1">
            <Link href="/explore/notion-nba">
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
            <QuickAccess />
          </div>
        </div>
      </div>
    </div>
  );
}
