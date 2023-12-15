interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  return (
    <a href={props.href} className="link">
      {props.children}
    </a>
  );
}
