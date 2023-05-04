import Image from "next/image";

export default function NotionNBA() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/toy-lovers/toy-lovers-browser.png"
        alt="Browser icon"
        width={1226}
        height={922}
        className="pointer-events-none relative z-10 w-full"
      />
      <div className="absolute left-0 top-0 h-full w-full scale-100 transition-transform duration-700 hover:scale-110">
        <Image
          src="/images/toy-lovers/toy-lovers-bg.png"
          alt="Toy Lovers background"
          width={1226}
          height={922}
        />
      </div>
    </div>
  );
}
