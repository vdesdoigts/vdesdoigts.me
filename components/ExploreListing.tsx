import ShowItem from "@/components/ShowItem";
import Genshin from "@/components/previews/Genshin";
import Journey from "@/components/previews/Journey";
import NotionNBA from "@/components/previews/NotionNBA";
import Sorarium from "@/components/previews/Sorarium";
import Link from "next/link";

export default function ExploreListing() {
  return (
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
        <Link href="/explore/genshin-impact-companion">
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
  );
}
