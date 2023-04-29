export default function QuickAccess() {
  return (
    <div className="c-quick-access border border-primary-500 bg-white p-6">
      <h2 className="font-serif text-xl">Quick access</h2>
      <ul className="grid grid-cols-1 gap-1 pt-4">
        <li>
          <a className="text-lg font-light underline">
            Companion tool for Genshin Impact
          </a>
        </li>
        <li>
          <a className="text-lg font-light underline">
            LeBron James carrer showcase
          </a>
        </li>
      </ul>
      <div className="pt-6">
        <a className="">&#8594; Explore more</a>
      </div>
    </div>
  );
}
