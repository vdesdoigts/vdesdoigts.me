import Link from "next/link";

export default function QuickAccess() {
  return (
    <div className="c-quick-access border border-primary-500 bg-white p-6">
      <h2 className="font-serif text-xl">Quick access</h2>
      <ul className="grid grid-cols-1 gap-1 pt-4">
        <li>
          <a
            className="text-lg font-light hover:text-primary-500"
            href="/explore/genshin-impact-companion"
          >
            Companion tool for Genshin Impact
          </a>
        </li>
        <li>
          <a
            className="text-lg font-light hover:text-primary-500"
            href="/explore/the-journey"
          >
            Animated showcase of LeBron James&apos; career
          </a>
        </li>
      </ul>
      <div className="pt-6">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-primary-500 transition-all hover:translate-x-1"
        >
          <span className="inline-block text-lg">→</span>{" "}
          <span className="inline-block text-lg font-light">explore more</span>
        </Link>
      </div>
    </div>
  );
}
