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
        <div className="grid w-full grid-cols-3 gap-x-8 gap-y-14 pt-8">
          <div className="col-span-1">
            <Link
              href="https://www.notion.so/vdesdoigts/The-Great-NBA-Dashboard-2b9d968e8b37494ba0ff943e8f42aa8d?pvs=4"
              target="_blank"
            >
              <ShowItem
                desc="Season games, teams and players in Notion"
                title="NBA in Notion"
                url="notion.app/nba-schedule"
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
