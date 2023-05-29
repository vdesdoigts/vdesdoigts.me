export default function Heading({
  subtitle,
  title,
  desc,
}: {
  subtitle: string;
  title: string;
  desc?: React.ReactNode;
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-x-8 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2 lg:col-start-2">
        <div>
          <h3 className="text-3xl font-light text-gray">{subtitle}</h3>
          <h2 className="font-serif text-7xl font-bold uppercase">{title}</h2>
          {desc}
        </div>
      </div>
    </div>
  );
}
