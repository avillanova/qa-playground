interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className }: LinkProps) {
  return (
    <a href={href} className={`link ${className}`}>
      {children}
    </a>
  );
}
