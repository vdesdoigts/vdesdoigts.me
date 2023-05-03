import Heading from "@/components/Heading";
import QuickAccess from "@/components/QuickAccess";
import ShowItem from "@/components/ShowItem";

export default function Explore() {
  return (
    <div className="pt-44">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Explore" subtitle="At your own risk" />
        </div>
        <div className="grid w-full grid-cols-3 gap-6 pt-8">
          <div className="col-span-1">
            <ShowItem
              desc="Season games, teams and players in Notion"
              title="NBA in Notion"
              url="vdesdoigts.me/explore/nba-notion"
            >
              <div></div>
            </ShowItem>
          </div>
          <div className="col-span-1">
            <ShowItem
              desc="Collectible showcase for NBA Sorare"
              title="Sorarium"
              url="vdesdoigts.me/explore/sorarium"
            >
              <div></div>
            </ShowItem>
          </div>
          <div className="col-span-1">
            <QuickAccess />
          </div>
        </div>
      </div>
    </div>
  );
}
