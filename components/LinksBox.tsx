interface LinksBoxProps {
  title?: string;
  links: {
    label: string;
    url: string;
  }[];
}

export default function LinksBox({
  title = "Resources",
  links,
}: LinksBoxProps) {
  return (
    <div className="not-prose c-quick-access border border-primary-500 bg-white p-6">
      <h2 className="font-serif text-xl">{title}</h2>
      <ul className="grid grid-cols-1 gap-1 pt-4 lg:grid-cols-2">
        {links.map((link) => (
          <li>
            <a className="text-lg font-light underline" href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
