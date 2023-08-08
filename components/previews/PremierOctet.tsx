import Image from "next/image";

export default function PremierOctet() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/po/po-bg.png"
        alt="Premier Octet gradient background"
        width={1226}
        height={922}
      />
      <div className="absolute left-0 top-0 h-full w-full scale-100 transition-transform duration-700 hover:scale-110">
        <Image
          src="/images/po/po-icon.png"
          alt="Premier Octet icon"
          width={1226}
          height={922}
        />
      </div>
    </div>
  );
}
