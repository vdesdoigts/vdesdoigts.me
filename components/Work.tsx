import Heading from "@/components/Heading";
import ShowItem from "@/components/ShowItem";
import Playgrounds from "@/components/previews/Playgrounds";
import PremierOctet from "@/components/previews/PremierOctet";
import ToyLovers from "@/components/previews/ToyLovers";

export default function Work() {
  return (
    <div className="pt-44">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Work" subtitle="In production" />
        </div>
        <div className="grid w-full grid-cols-3 gap-x-8 gap-y-12 pt-8">
          <div className="col-span-1">
            <a
              href="https://premieroctet.com"
              target="_blank"
              className="group"
            >
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
            <a href="https://toylovers.club" className="group" target="_blank">
              <ShowItem
                desc="Online magazine about toy photography"
                title="Toy Lovers"
                url="toylovers.club"
              >
                <ToyLovers />
              </ShowItem>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
