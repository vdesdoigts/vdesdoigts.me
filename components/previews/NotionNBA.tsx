import Image from "next/image";

export default function NotionNBA() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/notion-nba/notion-nba-bg.png"
        alt="NBA in Notion background"
        width={1226}
        height={922}
      />
      <div className="absolute left-0 top-0 h-full w-full translate-y-0 transition-transform duration-700 hover:-translate-y-2">
        <Image
          src="/images/notion-nba/notion-nba-icon.png"
          alt="NBA in Notion preview"
          width={1226}
          height={1022}
        />
      </div>
    </div>
  );
}
