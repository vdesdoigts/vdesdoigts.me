import Heading from "@/components/Heading";
import ShowItem from "@/components/ShowItem";
import Playgrounds from "@/components/previews/Playgrounds";
import PremierOctet from "@/components/previews/PremierOctet";

export default function Work() {
  return (
    <div className="pt-40">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Work" subtitle="In production" />
        </div>
        <div className="grid w-full grid-cols-3 gap-x-8 gap-y-12 pt-8">
          <div className="col-span-1">
            <a href="" className="group">
              <ShowItem
                desc="Web and mobile application development"
                title="Premier Octet"
                url="premieroctet.com"
                color="[#5057F2]"
              >
                <PremierOctet />
              </ShowItem>
            </a>
          </div>
          <div className="col-span-1">
            <a href="" className="group">
              <ShowItem
                desc="Find the best streetball court around you"
                title="Playgrounds"
                url="vdesdoigts.me/playgrounds"
                color="[#F06400]"
              >
                <Playgrounds />
              </ShowItem>
            </a>
          </div>
          <div className="col-span-1">
            <a href="" className="group">
              <ShowItem
                desc="A collection of my favorite Notion templates"
                title="Toy Lovers"
                url="toylovers.club"
              >
                <div></div>
              </ShowItem>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
