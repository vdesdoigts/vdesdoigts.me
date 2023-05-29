export default function ShowItem({
  children,
  color = "primary-500",
  desc,
  title,
  url,
}: {
  children: React.ReactNode;
  color?: string;
  desc: string;
  title: string;
  url: string;
}) {
  return (
    <article className="group grid w-full">
      <div>{children}</div>
      <div className="grid w-full gap-1 pt-4">
        <h2 className="font-serif text-2xl">{title}</h2>
        <p className="text-xl font-light">{desc}</p>
        <p
          className={`transition-color text-xl font-light text-gray duration-700 group-hover:text-${color}`}
        >
          {url}
        </p>
      </div>
    </article>
  );
}
