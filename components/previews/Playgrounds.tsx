import Image from "next/image";

export default function Playgrounds() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/playgrounds/playgrounds-bg.png"
        alt="me"
        width={1226}
        height={922}
      />
      <div className="absolute left-0 top-0 h-full w-full scale-100 transition-transform duration-700 hover:scale-110">
        <Image
          src="/images/playgrounds/playgrounds-icon.png"
          alt="me"
          width={1226}
          height={922}
        />
      </div>
    </div>
  );
}
