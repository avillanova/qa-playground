interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link(props: LinkProps) {
  return (
    <a href={props.href} className={`link ${props.className}`}>
      {props.children}
    </a>
  );
}
