import Heading from "@/components/Heading";
import WritingListing from "@/components/WritingListing";
import { Writing as IWriting } from "contentlayer/generated";

export default function Writing({ allWritings }: { allWritings: IWriting[] }) {
  return (
    <div className="pt-28">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Writing" subtitle="Latest posts" />
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
  );
}
