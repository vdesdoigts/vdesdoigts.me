import Heading from "@/components/Heading";
import WritingListing from "@/components/WritingListing";

export default function Writing() {
  return (
    <div className="pt-28">
      <div className="container mx-auto px-4">
        <div className="pb-6">
          <Heading title="Writing" subtitle="Latest posts" />
        </div>
        <div className="pt-8">
          <WritingListing />
        </div>
      </div>
    </div>
  );
}
