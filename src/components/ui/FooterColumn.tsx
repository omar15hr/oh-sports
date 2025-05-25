interface Props {
  title: string;
  links: { name: string; href: string }[];
}

export function FooterColumn({ title, links }: Props) {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}